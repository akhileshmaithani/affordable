import { Directive, OnInit, OnChanges, Renderer, ElementRef, Input, Output, EventEmitter } from '@angular/core';


import * as Hammer from 'hammerjs';
import * as _ from 'underscore';
import Utils from '../../../utils';

@Directive({
	selector: '[appSliderPicker]',
	host: {
		'(mousedown)': 'slideStart($event)',
		'(touchstart)': 'slideStart($event)'
	}
})
export class SliderPickerDirective implements OnInit, OnChanges {

	@Input() min: number = 0;
	@Input() max: number = 100;
	@Input() minValue: number;
	@Input() maxValue: number;
	@Input() opts: any = {};
	@Input() pos: number = 0;
	@Input() defaultValue: any;
	@Input() index: number;
	@Output() onChange: EventEmitter<any> = new EventEmitter();
	@Output() onFinish: EventEmitter<any> = new EventEmitter();

	touch: any;
	lastX: any = 0;
	currentValue: any = 0;
	minX: any;
	maxX: any;
	parent: any;
	currentPos: any;
	isInit: boolean = false;
	range: number = 100;

	constructor(private el: ElementRef) {
		this.onTouchDragHanlder = this.onTouchDragHanlder.bind(this);
		this.setTriggerValue = this.setTriggerValue.bind(this);
	}

	ngOnInit() {
		this.touch = new Hammer(this.el.nativeElement);

		/* Init Data */
		this.parent = this.el.nativeElement.parentElement.getBoundingClientRect()
		this.currentPos = this.el.nativeElement.getBoundingClientRect()
		this.range = this.max - this.min;

		/* Set Default Value */
		this.setDefaultValue();

		this.isInit = true;
	}

	ngOnChanges() {
		if(this.isInit) {

			/* Re-Render new Value */
			this.setDefaultValue()
		}
	}

	public setDefaultValue() {
		const nextPos = this.calculateNextPosFromValue(this.defaultValue);
		this.el.nativeElement.style.left = nextPos + "px";
	}

	slideStart(event) {
		document.ondragstart = function () { return false; };
		document.body.onselectstart = function () { return false; };

		this.touch.off("panleft panright panend")
		/* Touch */
		this.touch.on("panleft panright", this.onTouchDragHanlder);
		this.touch.on("panend", this.setTriggerValue)
	}

	onTouchDragHanlder(event) {

		/* Calculate Next X Position */
		const xPos = event.center.x - this.parent.left;
		this.render(xPos);
	}

	calculateNextValue(nextPos) {

		const percentage = (nextPos / this.parent.width) * 100
		const range = this.max - this.min;
		const nextValue = ((percentage / 100) * range) + this.min;

		if(nextValue < this.min) {
			return this.min;
		} else if(nextValue > this.max) {
			return this.max
		} else {
			if(this.maxValue !== undefined) {
				if(nextValue < this.maxValue) {
					return nextValue;
				} else {
					return this.maxValue;
				}
			}

			if(this.minValue !== undefined) {
				if(nextValue > this.minValue) {
					return nextValue
				} else {
					return this.minValue
				}
			}

			return nextValue
		}
	}


	calculateTriggerValue(value) {
		return Utils.calculateTriggerValue(value, this.opts);
	}


	setTriggerValue(e) {
		/* Move Picker */
		setTimeout(() => {
			const value = this.calculateTriggerValue(this.defaultValue);
			this.onFinish.emit({ pos: this.pos, value: value, index: this.index })
		}, 2)
	}

	calculateNextPosFromValue(value) {
		return ((value - this.min)/ this.range) * this.parent.width;
	}

	render(nextPos) {

		/* Update Value */
		const value = this.calculateNextValue(nextPos);

		/* Move Picker */
		this.onChange.emit({ pos: this.pos, value: value, index: this.index })
	}

}
