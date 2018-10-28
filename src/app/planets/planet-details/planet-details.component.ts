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
  planetId: number;
  planet: IPlanet;
  // planet: IPlanet = new IPlanet();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planetsManager: PlanetsManagerService,
    private planetsApiService: PlanetsApiService
  ) { }

  ngOnInit() {
    this.planetId = +this.route.snapshot.paramMap.get('id');
    this.getPlanetData();
  }

  getPlanetData() {
    if (this.planetsManager.allPlanets.length) {
      this.planet = this.planetsManager.allPlanets[this.planetId];
    }
    else {
      console.log("attempt to connect to server");
      const planet$ = this.planetsApiService.getPlanetById(this.planetId).subscribe(
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