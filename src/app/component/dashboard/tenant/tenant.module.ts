import {routes} from './tenant.routes';
import {TenantComponent} from './tenant.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ListingComponent} from './listing/listing.component';
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";
import {CommonModule} from '@angular/common';
import {MyApplicationComponent} from './my-application/my-application.component';
import {PendingLeasesComponent} from './pending-leases/pending-leases.component';

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        TenantComponent,
        SidebarComponent,
        ListingComponent,
        MyApplicationComponent,
        PendingLeasesComponent,
        SidebarMenuComponent
    ],
    imports: [
        CommonModule,

        RouterModule.forChild(routes),
    ],
})
export class TenantModule {
    public static routes = routes;
}
