import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirusSpreadCountryComponent } from './virus-spread-country.component';

describe('VirusSpreadCountryComponent', () => {
  let component: VirusSpreadCountryComponent;
  let fixture: ComponentFixture<VirusSpreadCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirusSpreadCountryComponent]
    });
    fixture = TestBed.createComponent(VirusSpreadCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
