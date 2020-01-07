import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "../material-ui/material.module";
import { AppRouting } from "../routing/routing.module";
import { AppComponent } from "./components/app-root/app-root.component";
import { AuthorComponent } from "./components/author/author.component";
import { HeaderComponent } from "./components/header/header.component";
import { DefinitionComponent } from "./components/planets/definition/definition.component";
import { PlanetDetailsComponent } from "./components/planets/planet-details/planet-details.component";
import { PlanetsBrowserComponent } from "./components/planets/planets-browser/planets-browser.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlanetsBrowserComponent,
    HeaderComponent,
    PlanetDetailsComponent,
    DefinitionComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AppRouting
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
