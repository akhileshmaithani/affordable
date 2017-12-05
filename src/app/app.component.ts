/**
 * Angular 2 decorators and services
 */
import {
    Component, ElementRef,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

import {ACTIONS, ApplicationService, IApp} from './services/application.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {TokenManagerService} from './services/token-manager.service';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    public name = 'Affordable.city';
    state: IApp;
    isAuth$: Subscription;
    state$: Subscription;

    constructor(private router: Router,
                private _authService: AuthService,
                private _tokenManager: TokenManagerService,
                private _applicationService: ApplicationService,
                private el: ElementRef) {
    }

    ngOnInit() {

        this.state$ = this._applicationService.$stream
            .subscribe((state) => {
                this.state = state
            });
        this._applicationService.setToken(this._tokenManager.get());

        // TODO: on isAuthenticated changes
       /* this.isAuth$ = this._applicationService.$stream.filter((state) => state.action === ACTIONS.AUTHENTICATION_CHANGE)
            .subscribe((state) => {
                if (state.isAuthenticated) {
                    this.state = state;
                }
            });*/


    }

    ngOnDestroy() {
        this.isAuth$.unsubscribe();
        this.state$.unsubscribe();
    }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
