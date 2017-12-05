import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPopoverComponent } from './slider-popover.component';

describe('SliderPopoverComponent', () => {
  let component: SliderPopoverComponent;
  let fixture: ComponentFixture<SliderPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
