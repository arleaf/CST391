import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarsComponent } from './display-cars.component';

describe('DisplayCarsComponent', () => {
  let component: DisplayCarsComponent;
  let fixture: ComponentFixture<DisplayCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCarsComponent]
    });
    fixture = TestBed.createComponent(DisplayCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
