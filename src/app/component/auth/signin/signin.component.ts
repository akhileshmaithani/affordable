import { Component, ViewChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../services/signin.service';
import { NotificationsService } from 'angular2-notifications/dist';
import {
    Animation, API_RESPONSE, DEFAULT_NOTIFICATION_OPTIONS, ROUTES,
    USER_TYPE
} from '../../../config-files/constants';
import { ISignin } from '../models/signin.model';
import { AuthService } from '../../../services/auth.service';
import { ApplicationService } from '../../../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['signin.component.scss'],
    providers: [SigninService],
    animations: [Animation]
})

export class SignInComponent {
    @ViewChild('closeBtn') closeBtn: ElementRef;
    signinForm: FormGroup;
    UserName: FormControl;
    Password: FormControl;
    @Input() closable = true;
    @Input() visible: boolean;
    @Input() userType: any;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    showSignUpDialog = false;
    isSigninOpen: boolean = true;

    constructor(private fb: FormBuilder,
                private _signinService: SigninService,
                private _notification: NotificationsService,
                private _authService: AuthService,
                private _applicationService: ApplicationService,
                private _route: ActivatedRoute,
                private _router: Router) {
        this.initForm();

    }

    onSubmit(user: ISignin) {

        this._signinService.signIn(user).subscribe(
            (response: any) => {
                if (response.status === 0) {
                    this._notification.error('Error', 'Invalid Password!', DEFAULT_NOTIFICATION_OPTIONS)
                }
                else if (response.status === API_RESPONSE.OK) {
                    this._authService.storeJwt(response.json().data.Token, response.json().data.Refresh_Token);
                    this._applicationService.setToken(response.json().data.Token);
                    this._notification.success('Success', 'Welcome', DEFAULT_NOTIFICATION_OPTIONS);
                    this.close();
                    let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
                    if (this.userType === USER_TYPE.LANDLORD)
                        this._router.navigate([returnUrl || ROUTES.LANDLORD_DASHBOARD]);
                    else if (this.userType === USER_TYPE.TENANT)
                        this._router.navigate([returnUrl || ROUTES.TENANT_DASHBOARD]);
                    else
                        this._router.navigate([returnUrl || ROUTES.NON_AUTHORIZED_ROUTE]);
                }
            },
            (error: any) => {

                this._notification.info('Message', error.json().type, DEFAULT_NOTIFICATION_OPTIONS);
            }
        );

    }

    close() {
        this.visible = false;

        this.visibleChange.emit(this.visible);
    }

    closeSignin() {
        this.close();
        this.showSignUpDialog = !this.showSignUpDialog;
    }

    private initForm() {
        this.signinForm = this.fb.group({
            UserName: new FormControl(null, [Validators.required, Validators.email]),
            Password: new FormControl(null, Validators.required)
        })
        ;
    }


}
