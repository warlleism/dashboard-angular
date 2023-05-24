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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CasesByCountryComponent,
    GrowthByCountryComponent,
    VirusSpreadCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
