import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IForgotPassword} from '../models/forgotpassword.model';
import {ForgotPasswordService} from '../services/forgotpassword.service';

import {API_RESPONSE, DEFAULT_NOTIFICATION_OPTIONS} from '../../../config-files/constants';
import {NotificationsService, SimpleNotificationsModule} from 'angular2-notifications/dist';
import {HttpModule} from '@angular/http';
import {} from 'angular2-notifications/dist';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  providers: [ForgotPasswordService]
})

export class ForgotPasswordComponent {
Email: FormControl;
isFormSubmited: boolean;
forgotpasswordForm: FormGroup;
  //isNotification: boolean;
  constructor(private fb: FormBuilder, private _forgotpasswordService: ForgotPasswordService, private notification: NotificationsService) {
    this.initForm();
  }

  onSubmit(forgotpassword: IForgotPassword) {

    if (this.forgotpasswordForm.valid) {
      this._forgotpasswordService.forgotPassword(forgotpassword).subscribe(
        (response: any) => {
          if (response) {

            this.notification.success('Success', 'Mail Sent Sucessfully', DEFAULT_NOTIFICATION_OPTIONS);
            // this.router.navigate(['/curacall-trak'])

          } else {

            this.notification.error('Error', 'Please Try Again ! ', DEFAULT_NOTIFICATION_OPTIONS);

          }

        },
        (error: Error) => {
          this.notification.error('Error', 'Unable to send forgot password email. Please try again later!', DEFAULT_NOTIFICATION_OPTIONS);

        }
      );
    }
  }

  private initForm() {
    this.forgotpasswordForm = this.fb.group({
      Email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

}
