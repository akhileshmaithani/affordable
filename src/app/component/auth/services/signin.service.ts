import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../../../services/http-wrapper.service';
import { ISignin } from '../models/signin.model';
import { Observable } from 'rxjs/Observable';
import { API } from '../../../config-files/api';
import { Http } from '@angular/http';

@Injectable()

export class SigninService {
    constructor(private _http: Http, private _httpWrapper: HttpWrapperService) {

    }

    signIn(user: ISignin): Observable<any> {
        return this._http.post(API.SIGNIN, JSON.stringify(user));
    }
}
