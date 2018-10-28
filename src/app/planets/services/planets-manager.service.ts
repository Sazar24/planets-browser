import { Observable, Subject } from 'rxjs';
import { IPlanetsCollection } from './../models/externalData';
import { Injectable } from '@angular/core';
import { IPlanet } from '../models/planet';
import { PlanetsApiService } from './planets-api.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsManagerService {
  private planetsOnServerAmmount: number;
  allPlanets: IPlanet[] = [];
  // planetsObserver = new

  my1subject = new Subject();

  constructor(private planetsApiService: PlanetsApiService) { }

  addIdPropertyForEachInArray(array: IPlanet[]) {
    array.forEach((item, index) => {
      item.appId = index + 1;
    })
  }

  createIdProperty(item: IPlanet, id: number) {
    item.appId = id + 1;
    return item;
  }

  getAllPlanets() {
    const initialUrl = this.planetsApiService.requestURL;
    this.downloadNextPlanets(initialUrl);
  }

  downloadNextPlanets(url: string) {
    const subscription = this.planetsApiService.getNextPlanets(url).subscribe(
      (incomingData: IPlanetsCollection) => {
        const incomingPlanets: IPlanet[] = incomingData.results;
        this.addIdPropertyForEachInArray(incomingPlanets);
        this.allPlanets.push(...incomingPlanets);

        url = incomingData.next;
        console.log("in planetsManager222: ", url);
        console.log("allPlanets.length: ", this.allPlanets.length);
      },
      () => console.log("error while fetching data from server."),
      () => {
        if (url) this.downloadNextPlanets(url);
        else {
          subscription.unsubscribe();
          this.my1subject.next(this.allPlanets);
        }
      }
    )

    //todo: Create observable and subscribe to it in component(browser)
  };

}
