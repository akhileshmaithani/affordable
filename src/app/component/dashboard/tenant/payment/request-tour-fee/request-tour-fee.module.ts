import { RequestTourFeeComponent } from './request-tour-fee.component';
import { routes } from './request-tour-fee.routes';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
RequestTourFeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class RequestTourFeeModule {
  public static routes = routes;
}
