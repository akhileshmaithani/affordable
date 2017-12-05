import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TokenManagerService} from './token-manager.service';
import {Router} from '@angular/router';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

export interface IApp {
    action?: string;
    isAuthenticated: boolean;
    user?: IUser;
}

export interface IUser {
    FirstName?: string;
    LastName?: string;
    Status?: string;
    UserId?: string;
    UserEmail?: string;
}

export const ACTIONS: any = {

    AUTHENTICATION_CHANGE: 'AUTHENTICATION.CHANGE',
    SIGNED_IN: 'SIGNED.IN',
    SIGNED_OUT: 'SIGNED_OUT',
    MY_PROFILE_SET: 'MY_PROFILE_SET',

};

export class UserModel implements IUser {
    FirstName: string;
    LastName: string;

    constructor(public user: IUser = {}) {
        Object.assign(this, user);
    }

    fullName() {
        return [this.FirstName, this.LastName].join(' ');
    }

}

export const DEFAULTS: IApp = {
    isAuthenticated: false,
    user: new UserModel()
};

@Injectable()
export class ApplicationService {
    public $stream: BehaviorSubject<IApp>;
    private _data: IApp = Object.assign({}, DEFAULTS);

    constructor(private _tokenManager: TokenManagerService, private _router: Router) {
        this.initData();
        this.$stream = new BehaviorSubject(this._data);
    }

    public initData() {
        this._data = Object.assign({}, DEFAULTS);
    }

    public set(state: IApp): IApp {
        let data = Object.assign({}, this._data, state);
        return this._setData(data);
    }

    public _setData(data: IApp = DEFAULTS) {
        this._data = Object.assign({}, DEFAULTS, data);
        this.$stream.next(data);
        return data;
    }

    public setAuthenticated(isAuthenticated: any) {
        let data = Object.assign(this._data);
        data.isAuthenticated = isAuthenticated;
        data.action = ACTIONS.AUTHENTICATION_CHANGE;
        if (isAuthenticated) {
            try {
                let decodeToken = new JwtHelper().decodeToken(this._tokenManager.get());
                data.user.FirstName = decodeToken.FirstName;
                data.user.LastName = decodeToken.LastName;
                data.user.EmailId = decodeToken.EmailId;

            }
            catch (e) {
               // console.error(e);
            }
        }
        else {
            // signed out user - clear everything
            data.user = Object.assign({}, [], []);
            // this._router.navigate(['./login']);
        }
        return this._setData(data);

    }

    setToken(token: any) {

        let isValidToken;
        try {
            isValidToken = tokenNotExpired();
        } catch (e) {

            isValidToken = false;
        }
        return this.setAuthenticated(isValidToken);
    }

    signOut() {
        this._tokenManager.invalidate();
        this.setToken(this._tokenManager.get());
       this.initData();
    }

    isAuthenticated() {
        let data = Object.assign(this._data);
        return data.isAuthenticated;
    }

    setUser(user: IUser) {
        let data = Object.assign(this._data);
        data.user = new UserModel(user);
        return this._setData(data);
    }

    setProfile(profile?: UserModel) {
        let data = Object.assign(this._data);
        data.profile = profile;
        data.action = ACTIONS.PROFILE_SELECTED;
        return this._setData(data);
    }

    getUser() {
        return this._data.user;
    }

}
