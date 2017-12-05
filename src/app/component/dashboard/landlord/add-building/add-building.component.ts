import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IBuilding} from '../models/building.model';

@Component({
    selector: 'app-add-building',
    templateUrl: './add-building.component.html',
    styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent {
    buildingForm: FormGroup;
    public geoAddressSettings: any = {
        showSearchButton: false,
        currentLocIconUrl: 'https://cdn4.iconfinder.com/data/icons/proglyphs-traveling/512/Current_Location-512.png',
        locationIconUrl: 'http://www.myiconfinder.com/uploads/iconsets/369f997cef4f440c5394ed2ae6f8eecd.png',
        recentStorageName: 'workAddressData',
        noOfRecentSearchSave: 0
    };

    constructor(private fb: FormBuilder) {
        this.initForm();
    }

    initForm() {
        this.buildingForm = this.fb.group({
            Address: new FormControl(null),
            City: new FormControl(null),
            State: new FormControl(null),
            ZipCode: new FormControl(null),
            Unit: new FormControl(null)
        })
    }

    geoautoCompleteCallback(data: any): any {

        this.buildingForm.setValue({

            City: data.name,
            State: '',
            ZipCode: '',
            Unit: ''
        });
    }

    onSubmit(data: IBuilding) {

    }
}
