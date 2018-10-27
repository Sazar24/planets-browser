import { PlanetsManagerService } from './../services/planets-manager.service';
import { IPlanet } from './../models/planet';
import { PlanetsApiService } from '../services/planets-api.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'planets-browser',
  templateUrl: './planets-browser.component.html',
  styleUrls: ['./planets-browser.component.css']
})

export class PlanetsBrowserComponent {
  private planetsOnServerAmmount: number;
  private allPlanets: IPlanet[] = [];
  private dataSource: MatTableDataSource<IPlanet>;
  private displayedColumns: string[] = ['nr', 'name', 'population', 'climate', 'gravity'];

  _filterInputValue = '';
  get filterInputValue(): string {
    return this._filterInputValue;
  }

  set filterInputValue(inputValue: string) {
    this._filterInputValue = inputValue;
    const filtredData: IPlanet[] = this.allPlanets.filter(item => item.name.toLowerCase().includes(this._filterInputValue));
    this.dataSource = new MatTableDataSource(filtredData);
  }

  constructor(private planetsApiService: PlanetsApiService, private planetModelFixer: PlanetsManagerService) { }

  ngOnInit() {
    this.planetsApiService.get1st10PlanetsData().subscribe(
      incomingData => {
        this.planetsOnServerAmmount = +incomingData.count;
        this.allPlanets = incomingData.results;
        this.planetModelFixer.addIdPropertyForEachInArray(this.allPlanets);
        this.updateTableData();
      },
      () => console.log("error while getting data from server. Planets downloaded so far: " + this.allPlanets.length),
      () => {
        this.downloadNextPlanets();
      }
    );
  }

  downloadNextPlanets() {
    const downloadedPlanetsAmmount: number = this.allPlanets.length;
    // if (downloadedPlanetsAmmount === this.planetsOnServerAmmount) return; // review me: Should this line stay here?

    const subscription = this.planetsApiService.getNextPlanet(downloadedPlanetsAmmount).subscribe(
      incomingPlanetData => {
        const incomingDataFixed: IPlanet = this.planetModelFixer.createIdProperty(incomingPlanetData, downloadedPlanetsAmmount);
        this.allPlanets.push(incomingPlanetData);
        this.updateTableData();
      },
      () => console.log("error while getting data from server. Planets downloaded so far: " + downloadedPlanetsAmmount),
      () => this.downloadNextPlanets()
    )

    if (downloadedPlanetsAmmount === this.planetsOnServerAmmount) {
      subscription.unsubscribe();
      return;
    };
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  updateTableData() {
    this.dataSource = new MatTableDataSource(this.allPlanets);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(`updateTableData: ${JSON.stringify(this.allPlanets)}`);
  }
}


// pagination made by example from: https://material.angular.io/components/table/examples