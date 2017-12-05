import { routes } from './home.routes';
import { HomeComponent } from './home.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SliderBarComponent } from '../util/slider-bar/slider-bar.component';
import { SliderPickerComponent } from '../util/slider-picker/slider-picker.component';
import { SliderPickerDirective } from '../util/slider-picker/slider-picker.directive';
import { SliderPopoverComponent } from '../util/slider-popover/slider-popover.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { MapComponent } from './map/map.component';

import { SharedModule } from '../../shared/shared.module';
import { SliderBarDirective } from '../util/slider-bar/slider-bar.directive';

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        HomeComponent,
        SliderBarComponent,
        SliderPickerComponent,
        SliderBarDirective,
        SliderPickerDirective,
        SliderPopoverComponent,
        MapComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),

        Ng4GeoautocompleteModule.forRoot(),
        SharedModule

    ],
    providers: [

    ],

})
export class HomeModule {
    public static routes = routes;
}
