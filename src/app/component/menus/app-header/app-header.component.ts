import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService, DEFAULTS, IApp } from '../../../services/application.service';

import { NotificationsService } from 'angular2-notifications/dist';
import { DEFAULT_NOTIFICATION_OPTIONS, ROUTES, USER_TYPE } from '../../../config-files/constants.ts';
import { AuthService } from '../../../services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
    state: IApp = DEFAULTS;
    fullName: string = 'undefined';
    isSignin: boolean;
    isSignup: boolean;
    showSignUpDialog = false;
    showSignInDialog = false;
    @Input() userType;
    constructor(private _router: Router,
                private _authService: AuthService,
                private _notification: NotificationsService,
                private _appService: ApplicationService) {


    }

    ngOnInit() {

        this._appService.$stream.subscribe(
            (state) => {

                this.state = state;
                this.fullName = [state.user.FirstName, state.user.LastName].join(' ');

            }
        )
    }

    onSignupClick($event) {
        this.isSignin = false;
        this.isSignup = true;
    }

    onSignUpModel() {
        this.showSignUpDialog = !this.showSignUpDialog;
    }

    onSignInModel() {
        this.showSignInDialog = !this.showSignInDialog;
        this.userType = USER_TYPE.TENANT;
    }

    onSigninClick($event) {
        $event.preventDefault();
        this.isSignin = true;
        this.isSignup = false;
    }

    signOut($event: any) {
        $event.preventDefault();
        this._authService.signOut().subscribe(
            () => {

                this._router.navigate([ROUTES.NON_AUTHORIZED_ROUTE]);
            },
            () => {
                this._notification.error('Error', 'Unable to logout!', DEFAULT_NOTIFICATION_OPTIONS)
            }
        );
    }
}
