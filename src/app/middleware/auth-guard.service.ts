import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {AuthService} from '../services/auth.service';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router,
              private _applicationService: ApplicationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (tokenNotExpired()) {
      if (this._applicationService.isAuthenticated()) return true;
    }

    this._router.navigate(['./sign-in'], {queryParams: {returnUrl: state.url}});
    return false;
  }


}
