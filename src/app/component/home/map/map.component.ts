import {
    AfterViewInit,
    Component, EventEmitter, Input, OnChanges,
    OnInit
} from "@angular/core";
import {AppState} from '../../app.service';
// import {ApartmentModelData} from './model/apartment.model';
import {Title} from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import * as _ from 'underscore';
import {NotificationsService} from 'angular2-notifications/dist';
import {DEFAULT_NOTIFICATION_OPTIONS} from '../../config-files/constants';
import {MapService} from '../services/map.service';
import {Router} from '@angular/router';

@Component({
    selector: "app-map-component",
    providers: [
        Title
    ],
    styleUrls: ["./map.component.scss"],
    templateUrl: "./map.component.html"

})

export class MapComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() apartment: any;
    @Input() flag: any;
    style: any;
    apartmentIconUrl: any;
    lat: number;
    lng: number;
    latValue: number;
    lngValue: number;
    options: any = {};
    /* Default Options */
    defaultOpts = {
        defaultValue: 24000,
        min: 24000,
        max: 250000,
        readonly: false,
        trigger: 1000,
        label: {
            range: 1000,
            format: '$9'
        },
        popover: {
            autohide: true
        }
    };
    routerLink: any;
    private thresholdAmount: number;

    constructor(public _mapService: MapService, private router: Router) {
    }

    ngOnInit() {
        this.latValue = 40.7739764;
        this.lngValue = -73.95385469999997;
        this.options = _.clone(this.defaultOpts);
        this.thresholdAmount = (24000) / 40;
        this.lng = this.lngValue;
        this.lat = this.latValue;
        this.apartmentIconUrl = "http://104.239.169.23/assets/img/map-marker-green.png";
        this.style = [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "40"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
    }

    ngOnChanges(changes: any) {
        // console.log('Change ', changes);
        // if (changes.apartment && changes.apartment.currentValue) {
        //     console.log("============", changes.apartment.currentValue.Address);
        //     let routerLinkArray = [];
        //     routerLinkArray[0] = 'individual-list-view';
        //     routerLinkArray[1] = changes.apartment.currentValue.Address;
        //     this.routerLink = routerLinkArray;
        //     console.log('Router: ', this.routerLink);
        // }
    }

    onClick($event) {


        if (this._mapService.workingData) {
            this.router.navigate(['individual-list-view',$event.Address,$event.Latitude, $event.Longitude]);
        } else {
           this.router.navigate(['individual-list-view',$event.Address]);
        }

    }

    ngAfterViewInit() {
    }

}
