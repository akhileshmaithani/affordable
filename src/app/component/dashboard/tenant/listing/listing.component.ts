import {Component} from '@angular/core';
import {ApartmentModelData} from '../../../home/model/apartment.model';

@Component({
    selector:'app-tenant-listing',
    templateUrl:'listing.component.html',
    styleUrls: ['listing.component.scss'],
    providers: [

        ApartmentModelData

    ]
})
export class ListingComponent{
    public apartementData: any;

    constructor(public apartmentData: ApartmentModelData) {
        this.apartementData = apartmentData.apartmentData;


    }
    onClick(apartment:any)
    {

    }
}

