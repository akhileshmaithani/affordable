import { ApplicationsFormsComponent } from "./applications-forms.component";
import { OverviewComponent } from "./overview/overview.component";
import { ApplicationComponent } from "./application/application.component";
import { GuarantorComponent } from "./guarantor/guarantor.component";
import { FinancingComponent } from "./financing/financing.component";
export const routes = [
  {
    path: "",
    component: ApplicationsFormsComponent,
    children: [
      { path: "overview", component: OverviewComponent },
      { path: "application", component: ApplicationComponent },
      { path: "guarantor", component: GuarantorComponent },
      { path: "financing", component: FinancingComponent }
    ]
  }
];
