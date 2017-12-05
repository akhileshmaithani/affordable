import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPickerComponent } from './slider-picker.component';

describe('SliderPickerComponent', () => {
  let component: SliderPickerComponent;
  let fixture: ComponentFixture<SliderPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
