import { ApplicationsFormsComponent } from './applications-forms.component';
import { routes } from './applications-forms.routes';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from "./overview/overview.component";
import { ApplicationComponent } from "./application/application.component";
import { GuarantorComponent } from "./guarantor/guarantor.component";
import { FinancingComponent } from "./financing/financing.component";
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
ApplicationsFormsComponent,
SidebarComponent,
OverviewComponent,
ApplicationComponent,
GuarantorComponent,
FinancingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  
  ],
})
export class ApplicationFormModule {
  public static routes = routes;
}
