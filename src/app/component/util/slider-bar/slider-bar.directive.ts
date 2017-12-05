import {Directive, Input, OnInit, OnChanges, ElementRef} from '@angular/core';

@Directive({
    selector: '[appSliderBar]'
})
export class SliderBarDirective implements OnInit {
    @Input() model: any;
    @Input() opts: any;
    @Input() min: any;
    @Input() max: any;

    range: number = 100;
    parent: any;
    type: any = 'single';

    constructor(private el: ElementRef) {
    }

    ngOnInit() {

        this.parent = this.el.nativeElement.parentElement.getBoundingClientRect()
        this.range = this.max - this.min;
        this.setPickerType();
        this.setBarPosition();

        /* Detect Model Changes */
        this
            .model
            .valueChanges
            .subscribe((value) => {

                /* Re-render Bar */
                this.setBarPosition();
            })
    }

    public reRenderBar() {
        this.range = this.max - this.min;
        this.setBarPosition();
    }

    setBarPosition() {
        if (this.type === 'single') {
            this.setSingleBarPosition();
        } else {
            this.setRangeBarPosition();
        }
    }

    setSingleBarPosition() {

        const value = this.model.value;
        const rightPos = this.calculateNextPosFromValue(value);

        this.el.nativeElement.style.left = 0 + "px";
        this.el.nativeElement.style.width = rightPos + "px";
    }

    setRangeBarPosition() {

        const value = this.model.value;
        const min = value[0]
        const max = value[1]

        const leftPos = this.calculateNextPosFromValue(min);
        const rightPos = this.calculateNextPosFromValue(max);

        this.el.nativeElement.style.left = leftPos + "px";
        this.el.nativeElement.style.width = (rightPos - leftPos) + "px";
    }


    calculateNextPosFromValue(value) {
        return ((value - this.min) / this.range) * this.parent.width;
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
