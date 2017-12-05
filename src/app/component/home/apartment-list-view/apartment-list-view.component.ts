import {Component, OnInit} from '@angular/core';
import {ApartmentModelData} from '../model/apartment.model';

@Component({
  selector: 'app-apartment-list-view',
  templateUrl: './apartment-list-view.component.html',
  styleUrls: ['./apartment-list-view.component.css'],
  providers: [

    ApartmentModelData

  ]
})
export class ApartmentListComponent  {

  public apartementData: any;

  constructor(public apartmentData: ApartmentModelData) {
    this.apartementData = apartmentData.apartmentData;


  }




}
