import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesByCountryComponent } from './cases-by-country.component';

describe('CasesByCountryComponent', () => {
  let component: CasesByCountryComponent;
  let fixture: ComponentFixture<CasesByCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesByCountryComponent]
    });
    fixture = TestBed.createComponent(CasesByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
