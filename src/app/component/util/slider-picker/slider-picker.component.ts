import {
    Component, OnInit, OnChanges, Input, Renderer, ElementRef, Output, EventEmitter, ViewChild,
    AfterViewInit
} from '@angular/core';
import { SliderPickerDirective } from './slider-picker.directive';
import Utils from '../../../utils';

import * as Hammer from 'hammerjs';
import * as _ from 'underscore';
import { MapService } from '../../home/services/map.service';

@Component({
    selector: 'app-slider-picker',
    host: {
        '(click)': 'clickOnBar($event)'
    },
    templateUrl: './slider-picker.component.html',
    styleUrls: ['./slider-picker.component.scss']
})
export class SliderPickerComponent implements OnInit, AfterViewInit {

    @ViewChild(SliderPickerDirective) picker;
    @ViewChild("picker3") picker3;
    @Input() min: number = 0;
    @Input() max: number = 100;
    @Input() opts: any;
    @Input() model: any;
    @Input() sModel: any;

    type: any = 'single';
    parent: any;

    constructor(private el: ElementRef, private _mapService: MapService) {
        // this.parent = this.el.nativeElement.parentElement.getBoundingClientRect()
    }

    ngOnInit() {
        this.setPickerType();
    }

    ngAfterViewInit() {
        this.parent = this.el.nativeElement.parentElement.getBoundingClientRect()
    }

    onChange({pos, value, index}) {
        if (index == undefined) {
            this.model.setValue(value)
        } else {
            let existValue = this.model.value
            existValue[index] = value
            this.model.setValue(existValue)
        }
    }

    onFinish({pos, value, index}) {
        if (index == undefined) {
            this.model.setValue(value)
            // this.sModel.setValue(value)
        } else {
            let existValue = this.model.value
            existValue[index] = value

            this.model.setValue(existValue)
            // this.sModel.setValue(existValue)
        }
    }

    clickOnBar($event) {

        let nextVal = this.calculateClickPos($event.clientX)
        const trigger = this.opts.trigger || false;

        /* Trigger Mode */
        if (trigger) {
            nextVal = this.calculateTriggerValue(nextVal)

        }

        if (this.type === 'single') {

            this.model.setValue(nextVal)
            // this.sModel.setValue(nextVal)
        } else {
            const currentValue = this.model.value;
            const cloneArray = _.clone(currentValue)
            const closet = cloneArray.sort((a, b) => Math.abs(nextVal - a) - Math.abs(nextVal - b))[0];

            if (closet === currentValue[0]) {
                this.model.setValue([nextVal, currentValue[1]])
                //   this.sModel.setValue([nextVal, currentValue[1]])
            } else {
                this.model.setValue([currentValue[0], nextVal])
                // this.sModel.setValue([currentValue[0], nextVal])
            }
        }

        this._mapService.$rentValue.next(nextVal);

    }

    calculateTriggerValue(value) {
        return Utils.calculateTriggerValue(value, this.opts);
    }

    calculateClickPos(xPos) {
        const percentage = ((xPos - this.parent.left) / this.parent.width) * 100
        const range = this.max - this.min;
        const nextValue = ((percentage / 100) * range) + this.min;

        if (nextValue < this.min) {
            return this.min;
        } else if (nextValue > this.max) {
            return this.max
        } else {
            const range = this.max - this.min;
            return nextValue
        }
    }

    setPickerType() {
        const modelType = this.model.constructor.name;

        switch (modelType) {
            case "FormControl":
                const modelValueType = typeof this.model.value
                switch (modelValueType) {
                    case "number":
                        this.type = 'single';
                        return;
                    case "object":
                        const length = this.model.value.length
                        if (length === 2) {
                            this.type = 'range';
                        } else {
                            this.type = 'single';
                        }
                        return;
                    default:
                        return;
                }
        }
    }
}
