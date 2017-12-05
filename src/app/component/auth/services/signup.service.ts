import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../../../services/http-wrapper.service';
import {ISignup} from '../models/signup.model';
import {Observable} from 'rxjs/Observable';
import {API} from '../../../config-files/api';
import {Http} from '@angular/http';


@Injectable()
export class SignupService {

    constructor(private _httpWrapperService: HttpWrapperService, private http: Http) {

    }

    signup(signup: ISignup): Observable<any> {

        return this.http.post(API.SIGNUP, JSON.stringify(signup));
    }

    userVerification(id: string): Observable<any> {
        return this.http.post(API.USER_VERIFICATION, JSON.stringify(id));
    }
}
