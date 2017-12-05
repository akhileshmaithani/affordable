import {routes} from './landlord.routes';
import {LandlordComponent} from './landlord.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// import {PageHeaderModule} from '../../page-header/page-header.module';
import {SidebarMenuComponent} from './landlord-header/sidebar-menu.component';
import {AddListingComponent} from './add-listing/add-listing.component';
import {AddBuildingComponent} from './add-building/add-building.component';
import {Ng4GeoautocompleteModule} from 'ng4-geoautocomplete';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        LandlordComponent,
        SidebarMenuComponent,
        AddListingComponent,
        AddBuildingComponent


    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCyZjxhFaAPLudPLGLUjJ24DkAw-so__fg',
            libraries: ["places"]
        }),
        AgmSnazzyInfoWindowModule,
        Ng4GeoautocompleteModule.forRoot()
    ],
})
export class LandlordModule {
    public static routes = routes;
}
