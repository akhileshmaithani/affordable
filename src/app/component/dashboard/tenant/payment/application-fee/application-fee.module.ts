import { ApplicationFeeComponent } from './application-fee.component';
import { routes } from './application-fee.routes';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
ApplicationFeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ApplicationFeeModule {
  public static routes = routes;
}
