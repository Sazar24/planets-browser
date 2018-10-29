import { PlanetsManagerService } from './../services/planets-manager.service';
import { PlanetsApiService } from './../services/planets-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlanet } from '../models/planet';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  planetIndexInLocalArray: number;
  planetOnServerNumber: number;
  planet: IPlanet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planetsManager: PlanetsManagerService,
    private planetsApiService: PlanetsApiService
  ) { }

  ngOnInit() {
    this.planetIndexInLocalArray = +this.route.snapshot.paramMap.get('id') - 1;
    this.planetOnServerNumber = +this.route.snapshot.paramMap.get('id');
    this.getPlanetData();
  }

  getPlanetData() {
    if (this.planetsManager.allPlanets.length) {
      this.planet = this.planetsManager.allPlanets[this.planetIndexInLocalArray];
    }
    else {
      const planet$ = this.planetsApiService.getPlanetById(this.planetOnServerNumber).subscribe(
        (item: IPlanet) => {
          this.planet = item;
        }
      )
    }
  }

  onBack(): void {
    this.router.navigate(['/planets']);
  }
}