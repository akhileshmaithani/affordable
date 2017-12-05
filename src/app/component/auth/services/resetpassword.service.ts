import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpWrapperService} from '../../../services/http-wrapper.service';
import {IResetPassword} from '../models/resetpassword.model';
import {Observable} from 'rxjs/Observable';
import {API} from '../../../config-files/api';

@Injectable()

export class ResetPasswordService {
  constructor(private _httpWrapperService: HttpWrapperService, private http: HttpClient) {

      }

      public resetPassword(resetpassword: IResetPassword): Observable<any> {

            return this.http.post(API.RESET_PASSWORD, JSON.stringify(resetpassword), {
              headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
            });
          }

  // public signIn(user: ISignin): Observable<any> {
  //   return this._http.post(API.SIGNIN, JSON.stringify(user), {
  //     headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
  //   });
  // }
}
