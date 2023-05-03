import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SitefooterComponent } from './comps/sitefooter/sitefooter.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MsqepageComponent } from './pages/academics/msqepage/msqepage.component';
import { SiteheaderComponent } from './comps/siteheader/siteheader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SitefooterComponent,
    HomepageComponent,
    MsqepageComponent,
    SiteheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
