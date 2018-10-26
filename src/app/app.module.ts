import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlanetsBrowserComponent } from './planets/planets-browser/planets-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlanetsBrowserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
    ]),
    HttpClientModule,
    // HttpClient,
  ],
  // providers: [], // angular 5. 
  bootstrap: [AppComponent]
})
export class AppModule { }
