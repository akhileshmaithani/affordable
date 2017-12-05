import { ApartmentListComponent } from './apartment-list-view.component';
import { routes } from './apartment-list-view.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
ApartmentListComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
})
export class ApartmentListModule {
  public static routes = routes;
}
