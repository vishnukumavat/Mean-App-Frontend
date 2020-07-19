import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    NavigationbarComponent,
    NotfoundComponent,
    AnalyticsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [Title, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
