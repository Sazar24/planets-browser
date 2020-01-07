import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorComponent } from "../app/components/author/author.component";
import { DefinitionComponent } from "../app/components/planets/definition/definition.component";
import { PlanetDetailsComponent } from "../app/components/planets/planet-details/planet-details.component";
import { PlanetsBrowserComponent } from "../app/components/planets/planets-browser/planets-browser.component";
import { WelcomeComponent } from "../app/components/welcome/welcome.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "planets", component: PlanetsBrowserComponent },
  { path: "planets/:id", component: PlanetDetailsComponent },
  { path: "definition", component: DefinitionComponent },
  { path: "author", component: AuthorComponent },
  { path: "**", redirectTo: "welcome", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
