import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlanetsBrowserComponent } from './planets/planets-browser/planets-browser.component';
import { MaterialModule } from './material-ui/material.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlanetsBrowserComponent,
    HeaderComponent,
    PlanetDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'planets', component: PlanetsBrowserComponent },
      { path: 'planets', component: PlanetsBrowserComponent },
      { path: 'planets/:id', component: PlanetDetailsComponent },
    ]),
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  // providers: [], // angular 5. 
  bootstrap: [AppComponent]
})
export class AppModule { }
