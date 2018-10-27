import { PlanetsApiService } from './../planets-api.service';
import { Component, OnInit } from '@angular/core';
// import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'planets-browser',
  templateUrl: './planets-browser.component.html',
  styleUrls: ['./planets-browser.component.css']
})
export class PlanetsBrowserComponent {
  planetsAmmount = 1201;

  constructor(private planetsApiService: PlanetsApiService) {
  }

  ngOnInit() {
    // this.planetsAmmount = this.planetsApiService.getNumber();

    this.planetsApiService.getPlanetsAmmount().subscribe(
      planetsAmmount => {
        this.planetsAmmount = +planetsAmmount.count;
        console.log("planets ammount: " + this.planetsAmmount);
      }
    )
  }
}
