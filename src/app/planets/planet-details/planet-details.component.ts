import { PlanetsManagerService } from './../services/planets-manager.service';
import { PlanetsApiService } from './../services/planets-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { IPlanet } from '../models/planet';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  planetIndex: number;
  planet: IPlanet;
  // planet: IPlanet = new IPlanet();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planetsManager: PlanetsManagerService,
    private planetsApiService: PlanetsApiService
  ) { }

  ngOnInit() {
    this.planetIndex = +this.route.snapshot.paramMap.get('id') -1;
    this.getPlanetData();
  }

  getPlanetData() {
    if (this.planetsManager.allPlanets.length) {
      this.planet = this.planetsManager.allPlanets[this.planetIndex];
    }
    else {
      const planet$ = this.planetsApiService.getPlanetById(this.planetIndex+1).subscribe(
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