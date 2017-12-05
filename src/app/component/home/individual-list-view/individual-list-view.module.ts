import {routes} from './individual-list-view.routes';
import {IndividualListComponent} from './individual-list-view.component';
import { ApartmentHeader } from "../apartment-header/apartment-header.component";
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgxGalleryModule} from 'ngx-gallery';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import { ApplyApartmentComponent } from "./apply-for-apartment/apply-for-apartment.component";
import { RequestTourComponent } from "./request-tour/request-tour.component";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        IndividualListComponent,
        ApartmentHeader,
        ApplyApartmentComponent,
        RequestTourComponent

    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        NgxGalleryModule,
        SharedModule
    ],
    exports: [ApplyApartmentComponent, RequestTourComponent]
})
export class IndividualListViewModule {
    titlemap: string;
    lat: number;
    lng: number;
    style: any;
    public static routes = routes;
}
