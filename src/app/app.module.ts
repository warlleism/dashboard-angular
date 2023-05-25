import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { BodyComponent } from './pages/body/body.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CasesByCountryComponent } from './components/cases-by-country/cases-by-country.component';
import { GrowthByCountryComponent } from './components/growth-by-country/growth-by-country.component';
import { VirusSpreadCountryComponent } from './components/virus-spread-country/virus-spread-country.component';
import { FatalitiesComponent } from './components/fatalities/fatalities.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CasesByCountryComponent,
    GrowthByCountryComponent,
    VirusSpreadCountryComponent,
    FatalitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      unitsFontWeight: "900",
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#b500c2",
      innerStrokeColor: "#454545",
      animationDuration: 300,
      titleFontSize: "21",
      titleFontWeight: "100",
      subtitleFontSize: "14",
      subtitleFontWeight: "100",
      showTitle: false,
      showSubtitle: false,
      showUnits: false,
      showBackground: false,
      startFromZero: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
