import {Injectable} from '@angular/core';
import {TokenManagerService} from './token-manager.service';
import {Headers} from '@angular/http';

@Injectable()
export class HttpWrapperService {
  constructor(private _tokenManager: TokenManagerService) {

  }

  public getHeader() {
    let token = this._tokenManager.get();
    let header = new Headers();
    header.set('Content-Type', 'application/json');
    header.set('Authorization', `${token}`);
    return header;

  }
}
