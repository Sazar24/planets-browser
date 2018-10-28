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
  private planetsOnServerAmmount: number;
  private allPlanets: IPlanet[] = [];
  private dataSource: MatTableDataSource<IPlanet>;
  private displayedColumns: string[] = ['nr', 'name', 'population', 'climate', 'gravity'];

  _filterInputValue = '';
  get filterInputValue(): string {
    return this._filterInputValue;
  }

  set filterInputValue(inputValue: string) {
    this.allPlanets = this.planetsManagerService.allPlanets;
    this._filterInputValue = inputValue;
    const filtredData: IPlanet[] = this.allPlanets.filter(item => item.name.toLowerCase().includes(this._filterInputValue));
    this.dataSource = new MatTableDataSource(filtredData);
  }

  constructor(private planetsApiService: PlanetsApiService, private planetsManagerService: PlanetsManagerService) { }

  // myReceiverSubject = new Subject();

  ngOnInit() {
    this.planetsManagerService.getAllPlanets();
    const getConnection = this.planetsManagerService.my1subject.subscribe(
      (item:IPlanet[]) => {
        this.updateTableData(item);
        console.log("received data: ", item);
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