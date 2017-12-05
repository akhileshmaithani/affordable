import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISignup } from '../models/signup.model';
import { SignupService } from '../services/signup.service';

import { API_RESPONSE, DEFAULT_NOTIFICATION_OPTIONS, ROUTES, Animation } from '../../../config-files/constants';
import { NotificationsService } from 'angular2-notifications/dist';
import { AuthService } from '../../../services/auth.service';
import { ApplicationService } from '../../../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [SignupService],
    animations: [Animation]
})

export class SignupComponent {
    @ViewChild('closeBtn') closeBtn: ElementRef;
    signupForm: FormGroup;
    FirstName: FormControl;
    LastName: FormControl;
    Email: FormControl;
    Password: FormControl;
    isFormSubmited: boolean;
    passPattern = /^(?=.*\d{2,})(?=.*[$-/:-?{-~!"^_`\[\]]{1,})(?=.*\w).{6,}$/;
    emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    showSignInDialog = false;

    constructor(private fb: FormBuilder,
                private _signupService: SignupService,
                private _notification: NotificationsService,
                private _authService: AuthService,
                private _applicationService: ApplicationService,
                private _route: ActivatedRoute,
                private _router: Router) {

        this.initForm();
    }

    onSubmit(signup: ISignup) {


        if (this.signupForm.valid) {

            this._signupService.signup(signup).subscribe(
                (response: any) => {
                    if (response.status === 0) {
                        this._notification.alert('Alert', 'Something went wrong. Please try again !', DEFAULT_NOTIFICATION_OPTIONS);
                    }
                    else if (response.status === API_RESPONSE.OK) {
                        this._authService.storeJwt(response.json().data.Token, response.json().data.Refresh_Token);
                        this._applicationService.setToken(response.json().data.Token);
                        this._notification.success('Success', 'Welcome', DEFAULT_NOTIFICATION_OPTIONS);
                      this.close();
                        let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
                        this.signupForm.reset();
                        this._router.navigate([returnUrl || ROUTES.TENANT_DASHBOARD]);

                    }
                    else {
                        this._notification.error('Error', 'Something went wrong. Please try again !', DEFAULT_NOTIFICATION_OPTIONS);

                    }
                },
                (error: any) => {

                    this._notification.error('Message', error.json().type, DEFAULT_NOTIFICATION_OPTIONS);
                }
            );

        }
    }

    close() {
        this.visible = false;

        this.visibleChange.emit(this.visible);
    }

    closeSignup() {
        this.close();
        this.showSignInDialog = !this.showSignInDialog;
    }

    private initForm() {
        this.signupForm = this.fb.group({
            FirstName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
            LastName: new FormControl(null, Validators.maxLength(10)),
            Email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
            Password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
        });
    }

}
