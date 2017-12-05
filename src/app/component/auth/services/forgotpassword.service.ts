import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpWrapperService} from '../../../services/http-wrapper.service';
import {IForgotPassword} from '../models/forgotpassword.model';
import {Observable} from 'rxjs/Observable';
import {API} from '../../../config-files/api';

@Injectable()

export class ForgotPasswordService {
  constructor(private _httpWrapperService: HttpWrapperService, private http: HttpClient) {

      }

      public forgotPassword(forgotpassword: IForgotPassword): Observable<any> {

            return this.http.post(API.FORGET_PASSWORD, JSON.stringify(forgotpassword), {
              headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
            });
          }

  // public signIn(user: ISignin): Observable<any> {
  //   return this._http.post(API.SIGNIN, JSON.stringify(user), {
  //     headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
  //   });
  // }
}
