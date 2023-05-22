import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthByCountryComponent } from './growth-by-country.component';

describe('GrowthByCountryComponent', () => {
  let component: GrowthByCountryComponent;
  let fixture: ComponentFixture<GrowthByCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrowthByCountryComponent]
    });
    fixture = TestBed.createComponent(GrowthByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
