import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatalitiesComponent } from './fatalities.component';

describe('FatalitiesComponent', () => {
  let component: FatalitiesComponent;
  let fixture: ComponentFixture<FatalitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatalitiesComponent]
    });
    fixture = TestBed.createComponent(FatalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
