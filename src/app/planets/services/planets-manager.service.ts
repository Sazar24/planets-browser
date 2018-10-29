import { Observable, Subject } from 'rxjs';
import { IPlanetsCollection } from './../models/externalData';
import { Injectable } from '@angular/core';
import { IPlanet } from '../models/planet';
import { PlanetsApiService } from './planets-api.service';
import { fetchingDataProgressInfo } from './transferData.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsManagerService {
  public planetsOnServerAmmount: number;
  public allPlanets: IPlanet[] = [];

  public planetsDataPackage = new Subject();
  public fetchingProgress = new Subject();

  constructor(private planetsApiService: PlanetsApiService) { }

  public getAllPlanets() {
    if (this.allPlanets.length === this.planetsOnServerAmmount) return;
    const initialUrl = this.planetsApiService.requestURL;
    this.downloadNextPlanets(initialUrl);
  }

  private downloadNextPlanets(url: string) {
    const subscription = this.planetsApiService.getNextPlanets(url).subscribe(
      (incomingData: IPlanetsCollection) => {

        this.allPlanets.push(...incomingData.results);
        this.setProgressData(incomingData.count, this.allPlanets.length);

        url = incomingData.next;
      },
      () => console.log("error while fetching data from server..."),
      () => {
        if (url) this.downloadNextPlanets(url);
        else {
          subscription.unsubscribe();
          this.informSubscribers();
        }
      }
    )
  };

  private setProgressData(ammount: number, planetsFetched: number) {
    this.planetsOnServerAmmount = ammount;
    let transferData: fetchingDataProgressInfo = {
      planetsFetched: planetsFetched,
      planetsTotalAmmount: ammount
    };
    this.fetchingProgress.next(transferData);
  }

  private addIdPropertyForEachInArray(array: IPlanet[]) {
    array.forEach((item, index) => {
      const extractedId: string = this.retrieveIdFromUrlProperty(item);
      item.appId = extractedId;
    })
  }

  private retrieveIdFromUrlProperty(planet: IPlanet): string {
    // example incoming data: "url": "https://swapi.co/api/planets/1/"   ---> i need to extract that "1" and return it as "id". This is the only unique property of incoming data and they are not incoming in numeric (by url ascending) order
    let itemUrl: string = planet.url;
    itemUrl = itemUrl.slice(0, itemUrl.length - 1); // cutting of last "slash"
    const lastRemainingSlashPosition: number = itemUrl.lastIndexOf("/");
    const extractedId: string = itemUrl.substring(lastRemainingSlashPosition + 1);

    return extractedId;
  }

  private sortAscendingById(array: IPlanet[]) {
    array.sort((a: any, b: any) => { return a.appId - b.appId });
  }

  private informSubscribers(): void {
    this.addIdPropertyForEachInArray(this.allPlanets);
    this.sortAscendingById(this.allPlanets);

    this.planetsDataPackage.next(this.allPlanets);
  }
}
