import { IPlanet } from './../models/planet';
import { PlanetsApiService } from '../service/planets-api.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'planets-browser',
  templateUrl: './planets-browser.component.html',
  styleUrls: ['./planets-browser.component.css']
})

export class PlanetsBrowserComponent {
  planetsAmmount;
  allPlanets: IPlanet[] = [];
  dataSource = this.allPlanets;
  // dataSource: MatTableDataSource<IPlanet[]>;

  _filterInputValue = '';
  get filterInputValue(): string {
    return this._filterInputValue;
  }

  set filterInputValue(inputValue: string) {
    this._filterInputValue = inputValue;
    console.log(`_filterInputValue: ${this._filterInputValue}`);

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private planetsApiService: PlanetsApiService) {
  }

  ngOnInit() {
    this.planetsApiService.getPlanetsData().subscribe(
      incomingData => {
        this.planetsAmmount = +incomingData.count;
        this.allPlanets = incomingData.results;
        console.log("planets ammount: " + this.planetsAmmount);
        console.log("planets downloaded: " + this.allPlanets.length)
        this.dataSource = this.allPlanets;
      }
    )
  }
  displayedColumns: string[] = ['name', 'population', 'climate', 'gravity'];
}
