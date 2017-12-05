import {EventEmitter, Injectable} from '@angular/core';
import {ApartmentModelData} from '../model/apartment.model';

@Injectable()
export class MapService {
    apartementData: any;
    workingData: any;

    $rentValue: EventEmitter<any> = new EventEmitter();

    constructor(public apartmentData: ApartmentModelData) {
        this.apartementData = apartmentData.apartmentData;
    }

    mapFilter(maxRent: number) {

        return this.apartementData = this.apartmentData.apartmentData
            .filter(value => value.Rent <= maxRent);
    }

    mapFiterByWorkAddress(lat: number, long: number, annualSalary: number) {

        return this.apartementData = this.apartmentData.apartmentData
            .filter(value => (value.Latitude === lat && value.Longitude === long));
    }
//||(value => value.Rent <= annualSalary)
    findApartmentExistsOrNot(lat: number, long: number)
    {
        return this.apartementData = this.apartmentData.apartmentData
            .filter(value => (value.Latitude === lat && value.Longitude === long));
    }

}
