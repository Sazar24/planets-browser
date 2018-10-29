import { Subject } from 'rxjs';
import { IPlanetsCollection } from './../models/externalData';
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
  private displayedColumns: string[] = ['nr', 'name', 'population', 'climate', 'gravity'];
  private dataSource: MatTableDataSource<IPlanet>;
  public allPlanets: IPlanet[] = [];
  public planetsOnServerAmmount: number;
  public progressBarValue: number = 0;

  _filterInputValue = '';
  get filterInputValue(): string {
    return this._filterInputValue;
  }

  set filterInputValue(inputValue: string) {
    this._filterInputValue = inputValue;
    const filtredData: IPlanet[] = this.allPlanets.filter(item => item.name.toLowerCase().includes(this._filterInputValue));
    this.dataSource = new MatTableDataSource(filtredData);
  }

  constructor(private planetsApiService: PlanetsApiService, private planetsManager: PlanetsManagerService) { }

  ngOnInit() {
    this.allPlanets = this.planetsManager.allPlanets;
    this.planetsOnServerAmmount = this.planetsManager.planetsOnServerAmmount;
    if (this.allPlanets.length) {
      this.updateTableData(this.allPlanets);
    }
    else {
      this.planetsManager.getAllPlanets();
      this.subscribeToIncomingData();
    }
  }

  subscribeToIncomingData() {

    const planetsData$ = this.planetsManager.planetsDataPackage$.subscribe(
      (item: IPlanet[]) => {
        this.updateTableData(item);
        planetsData$.unsubscribe();
      }
    );

    const planetsAmmount$ = this.planetsManager.fetchingProgress$.subscribe(
      (data: { planetsTotalAmmount, planetsFetched }) => {
        this.planetsOnServerAmmount = data.planetsTotalAmmount;
        this.progressBarValue = data.planetsFetched * 100 / data.planetsTotalAmmount;
      }
    )
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  updateTableData(allPlanetsData: IPlanet[]) {

    this.allPlanets = allPlanetsData;

    this.dataSource = new MatTableDataSource(this.allPlanets);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}


// pagination made by example from: https://material.angular.io/components/table/examples