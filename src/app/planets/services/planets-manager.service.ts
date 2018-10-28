import { Observable, Subject } from 'rxjs';
import { IPlanetsCollection } from './../models/externalData';
import { Injectable } from '@angular/core';
import { IPlanet } from '../models/planet';
import { PlanetsApiService } from './planets-api.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsManagerService {
  public planetsOnServerAmmount: number;
  public allPlanets: IPlanet[] = [];

  public planetsDataPackage$ = new Subject();
  public fetchingProgress$ = new Subject();

  constructor(private planetsApiService: PlanetsApiService) { }

  addIdPropertyForEachInArray(array: IPlanet[]) {
    array.forEach((item, index) => {
      item.appId = index + 1;
    })
  }

  getAllPlanets() {
    if (this.allPlanets.length === this.planetsOnServerAmmount) return;
    const initialUrl = this.planetsApiService.requestURL;
    this.downloadNextPlanets(initialUrl);
  }

  downloadNextPlanets(url: string) {
    const subscription = this.planetsApiService.getNextPlanets(url).subscribe(
      (incomingData: IPlanetsCollection) => {

        this.allPlanets.push(...incomingData.results);
        this.setProgressData(incomingData.count, this.allPlanets.length);

        url = incomingData.next;
        console.log("in planetsManager: ", url);
      },
      () => console.log("error while fetching data from server."),
      () => {
        if (url) this.downloadNextPlanets(url);
        else {
          subscription.unsubscribe();
          this.informSubscribers();
        }
      }
    )
  };

  setProgressData(ammount: number, planetsFetched: number) {
    const planetsTotalAmmount: number = +ammount;
    this.planetsOnServerAmmount = planetsTotalAmmount;

    this.fetchingProgress$.next({ planetsTotalAmmount, planetsFetched });
  }

  informSubscribers(): void {
    this.addIdPropertyForEachInArray(this.allPlanets);
    this.planetsDataPackage$.next(this.allPlanets);
  }
}