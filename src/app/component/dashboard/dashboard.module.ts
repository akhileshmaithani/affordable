import {routes} from './dashboard.routes';
import {DashBoardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageHeaderComponent} from '../page-header/page-header.component';




@NgModule({
    declarations: [

        /**
         * Components / Directives/ Pipes
         */
        DashBoardComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)


    ],
})
export class DashboardModule {
    public static routes = routes;
}
