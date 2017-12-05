import {Injectable} from '@angular/core';
import {REFRESH_TOKEN, TOKEN} from '../config-files/constants';

@Injectable()
export class TokenManagerService {
  public get(): string {
    return localStorage.getItem(TOKEN.KEY);
  }

  public set(token: string, refreshToken: string): void {
    if (token) {
      localStorage.setItem(TOKEN.KEY, token);
    }
    if (refreshToken) {
      localStorage.setItem(REFRESH_TOKEN.KEY, refreshToken);
    }
  }

  public invalidate() {
    localStorage.removeItem(TOKEN.KEY);
    localStorage.removeItem(REFRESH_TOKEN.KEY);
  }
}
