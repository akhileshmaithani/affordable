import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IChangePassword} from '../models/changepassword.model';
import {ChangePasswordService} from '../services/changepassword.service';

import {API_RESPONSE, DEFAULT_NOTIFICATION_OPTIONS} from '../../../config-files/constants';
import {NotificationsService} from 'angular2-notifications/dist';
//import { PasswordValidation } from '../matchpassword.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  providers: [ChangePasswordService]
})

export class ChangePasswordComponent {
isFormSubmited: boolean;
changePasswordForm: FormGroup;
Password: FormControl;
ConfirmPassword: FormControl;
OldPassword:FormControl
isNotification: boolean;
  constructor(private fb: FormBuilder, private _changepasswordService: ChangePasswordService, private notification: NotificationsService) {
    this.initForm();
  }

  onSubmit(changepassword: IChangePassword) {

    if (this.changePasswordForm.valid) {
      this._changepasswordService.changePassword(changepassword).subscribe(
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
    this.changePasswordForm = this.fb.group({
      OldPassword: new FormControl(null, [Validators.required]),
      Password: new FormControl(null, [Validators.required]),
      ConfirmPassword: new FormControl(null, [Validators.required])
    },
      {
        validator:  this.passwordMatchValidator
      }
    );
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
