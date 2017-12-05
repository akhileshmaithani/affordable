import { PaymentComponent } from './payment.component';
import { routes } from './payment.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
PaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class PaymentModule {
  public static routes = routes;
}
