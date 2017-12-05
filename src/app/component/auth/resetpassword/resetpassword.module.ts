import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResetPasswordComponent} from './resetpassword.component.ts';
import {routes} from './resetpassword.routes';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    ResetPasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes),
    SimpleNotificationsModule.forRoot()

  ]

})

export class ResetPasswordModule {
  public static routes = routes;
}
