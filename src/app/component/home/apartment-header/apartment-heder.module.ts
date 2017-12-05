import { NgModule } from '@angular/core';
import { ApplyApartmentModule } from "../individual-list-view/apply-for-apartment/apply-for-apartment.module";
import { ApartmentHeader } from './apartment-header.component';
import { RequestTourModule } from "../individual-list-view/request-tour/request-tour.module";


@NgModule({
    imports: [ApplyApartmentModule, RequestTourModule],
    exports: [],
    declarations: [ApartmentHeader],
    providers: [],
})
export class ApartmentHeaderModule { }
