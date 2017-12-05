import {Injectable} from '@angular/core';
import {TokenManagerService} from './token-manager.service';
import {ApplicationService} from './application.service';
import {REFRESH_TOKEN} from '../config-files/constants';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService {
  constructor(private _tokenManager: TokenManagerService, private  _applicationService: ApplicationService) {

  }

  public storeJwt(token: string, ref_token: string) {

    let jwt: string = token;
    let refreshJwt: string = ref_token;
    this._tokenManager.set(jwt, refreshJwt);

  }

  public signOut(): Observable<any> {
    return Observable.create((observer: any) => {
      try {
        this._applicationService.signOut();
        observer.next();
        observer.complete();
      } catch (e) {

        observer.error(e);
      }
    });
  }

}
