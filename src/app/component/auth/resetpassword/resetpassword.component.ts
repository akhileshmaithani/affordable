import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IResetPassword} from '../models/resetpassword.model';
import {ResetPasswordService} from '../services/resetpassword.service';

import {API_RESPONSE, DEFAULT_NOTIFICATION_OPTIONS} from '../../../config-files/constants';
import {NotificationsService} from 'angular2-notifications/dist';
//import { PasswordValidation } from '../matchpassword.component';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
  providers: [ResetPasswordService]
})

export class ResetPasswordComponent {
isFormSubmited: boolean;resetPasswordForm: FormGroup;Password: FormControl;ConfirmPassword: FormControl;
  isNotification: boolean;
  constructor(private fb: FormBuilder, private _resetpasswordService: ResetPasswordService, private notification: NotificationsService) {
    //this.initForm();
    this.resetPasswordForm = this.fb.group({
      Password: new FormControl(null, [Validators.required]),
      ConfirmPassword: new FormControl(null, [Validators.required])
    },
      {
        validator:  this.passwordMatchValidator
      }
    );
  }

  onSubmit(resetpassword: IResetPassword) {

    if (this.resetPasswordForm.valid) {
      this._resetpasswordService.resetPassword(resetpassword).subscribe(
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
    this.resetPasswordForm = this.fb.group({
      Password: new FormControl(null, [Validators.required]),
      ConfirmPassword: new FormControl(null, [Validators.required]),

    });
  }

  passwordMatchValidator(g: FormGroup) {
     return g.get('Password').value === g.get('ConfirmPassword').value
       ? null : { 'mismatch': true };

   }

   MatchValidator(g: FormGroup) {
    //alert(g.get('ConfirmPassword').value);
         return (g.get('ConfirmPassword').value!=null && g.get('Password').value!=null) ? this.passwordMatchValidator(g) : null;

       }
}
