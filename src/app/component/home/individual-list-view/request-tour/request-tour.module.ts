import { RequestTourComponent } from './request-tour.component';
import { routes } from './request-tour.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
RequestTourComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RequestTourComponent]
})
export class RequestTourModule {
  public static routes = routes;
}
