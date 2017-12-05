import { Component, OnInit, Input, OnChanges } from '@angular/core';
import Utils from '../../../utils';

@Component({
  selector: 'ng2-slider-popover',
  templateUrl: './slider-popover.component.html',
  styleUrls: ['./slider-popover.component.scss']
})
export class SliderPopoverComponent implements OnInit, OnChanges {

  @Input() value: any = 0;
  @Input() opts: any;

  formatted: any = 0
  constructor() { }

  ngOnInit() {
    this.getValue()
  }

  ngOnChanges() {
    this.getValue()
  }

  getValue() {
    const format = Utils.getDecimalFormatter(this.opts.label.format);
    this.formatted = Utils.formatValue(this.value, format);
  }

}
