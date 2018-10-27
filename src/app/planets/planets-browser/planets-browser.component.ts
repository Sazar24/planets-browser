import { IPlanet } from './../models/planet';
import { PlanetsApiService } from '../service/planets-api.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'planets-browser',
  templateUrl: './planets-browser.component.html',
  styleUrls: ['./planets-browser.component.css']
})

export class PlanetsBrowserComponent {
  planetsAmmount;
  allPlanets: IPlanet[] = [];
  dataSource: MatTableDataSource<IPlanet>;
  displayedColumns: string[] = ['name', 'population', 'climate', 'gravity'];

  _filterInputValue = '';
  get filterInputValue(): string {
    return this._filterInputValue;
  }

  set filterInputValue(inputValue: string) {
    this._filterInputValue = inputValue;
    console.log(`_filterInputValue: ${this._filterInputValue}`);
    console.log(`inputValue: ${inputValue}`);

    const filtredData: IPlanet[] = this.allPlanets.filter(item => item.name.toLowerCase().includes(this._filterInputValue));
    this.dataSource = new MatTableDataSource(filtredData);
  }

  constructor(private planetsApiService: PlanetsApiService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this.planetsApiService.getPlanetsData().subscribe(
      incomingData => {
        this.planetsAmmount = +incomingData.count;
        this.allPlanets = incomingData.results;
        // console.log("planets downloaded: " + this.allPlanets.length)
        
        this.dataSource = new MatTableDataSource(this.allPlanets);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }
}

// example-source: https://material.angular.io/components/table/examples