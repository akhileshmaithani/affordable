import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpWrapperService} from '../../../services/http-wrapper.service';
import {IChangePassword} from '../models/changepassword.model';
import {Observable} from 'rxjs/Observable';
import {API} from '../../../config-files/api';

@Injectable()

export class ChangePasswordService {
  constructor(private _httpWrapperService: HttpWrapperService, private http: HttpClient) {

      }

      public changePassword(changepassword: IChangePassword): Observable<any> {

            return this.http.post(API.CHANGE_PASSWORD, JSON.stringify(changepassword), {
              headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
            });
          }

  // public signIn(user: ISignin): Observable<any> {
  //   return this._http.post(API.SIGNIN, JSON.stringify(user), {
  //     headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
  //   });
  // }
}
