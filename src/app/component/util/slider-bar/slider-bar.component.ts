import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
// import { SliderBarDirective } from './slider-bar.directive'
import * as _ from 'underscore';
// import Utils from '../utils';
import { SliderBarDirective } from './slider-bar.directive';
import Utils from '../../../utils';

@Component({
    selector: 'app-slider-bar',
    templateUrl: './slider-bar.component.html',
    styleUrls: ['./slider-bar.component.scss']
})
export class SliderBarComponent implements OnInit, OnChanges {

    @ViewChild(SliderBarDirective) bar: SliderBarDirective;
    @Input() min: number = 0;
    @Input() max: number = 100;
    @Input() model: any;
    @Input() opts: any;

    labels: Array<any> = [];
    style: any = {
        label: {
            "width": "100%"
        }
    }

    isInit: boolean = false;

    constructor() {
    }

    ngOnInit() {
        /* Compute Label */

        this.labels = this.getLabels();
        this.isInit = true;
    }

    ngOnChanges() {
        if (this.isInit) {
            this.bar.reRenderBar();
        }
    }

    getLabels() {
        //const range = this.opts.label.range;
        const range = 1000;
        const format = Utils.getDecimalFormatter(this.opts.label.format);
        let list = _.range(this.min, this.max, range);

        /* Set Label Style */
        return list.map((item: any) => {
            return {
                label: Utils.formatValue(item, format),
                value: item
            }
        })
    }
}
