import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SignupService} from '../services/signup.service';
import {NotificationsService} from 'angular2-notifications/dist';
import {API_RESPONSE, DEFAULT_NOTIFICATION_OPTIONS, ROUTES} from '../../../config-files/constants';
import {ApplicationService} from '../../../services/application.service';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-user-verification',
    templateUrl: './user-verification.component.html',
    styleUrls: ['./user-verification.component.css'],

})
export class UserVerificationComponent {
    private userId: any;

    constructor(private _route: ActivatedRoute,
                private _signupService: SignupService,
                private _notification: NotificationsService,
                private _router: Router,
                private _applicationService : ApplicationService,
                private _authService: AuthService) {
        this._route.params.subscribe((params) => {
            this.userId = params['id'];
        });

    }

    verifiedUser(userId:string)
    {
        this._signupService.userVerification(userId).subscribe(
            (response: any) => {
                if (response.status === 0) {
                    this._notification.alert('Alert', 'Something went wrong. Please try again !', DEFAULT_NOTIFICATION_OPTIONS);
                }
                else if (response.status === API_RESPONSE.OK) {
                    this._authService.storeJwt(response.json().data.Token, response.json().data.Refresh_Token);
                    this._applicationService.setToken(response.json().data.Token);
                    this._notification.success('Success', 'Welcome', DEFAULT_NOTIFICATION_OPTIONS);
                    let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
                    this._router.navigate([returnUrl || ROUTES.TENANT_DASHBOARD]);

                }
                else {
                    this._notification.error('Error', 'Something went wrong. Please try again !', DEFAULT_NOTIFICATION_OPTIONS);

                }
            },
            (error: any) => {

                this._notification.alert('Alert', error.json().errors, DEFAULT_NOTIFICATION_OPTIONS);
            }
        );
    }
}
