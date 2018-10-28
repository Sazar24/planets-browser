import { PlanetsApiService } from './../services/planets-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlanet } from '../models/planet';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  planetId: number;
  planet: IPlanet;

  constructor(private route: ActivatedRoute, private planetsApiService: PlanetsApiService) { }

  ngOnInit() {
    this.planetId = +this.route.snapshot.paramMap.get('id');
                     
    console.log(this.planetId);

    // this.planet = this.planetsApiService.getPlanetById
  }
}
