import { IPlanetsCollection } from './../models/externalData';
import { IPlanet } from '../models/planet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class PlanetsApiService {
   requestURL = 'https://swapi.co/api/planets';
  // private allPlanets: IPlanet[] = [];

  constructor(private http: HttpClient) { }

  downloadPlanets(url = this.requestURL): Observable<IPlanetsCollection> {
    return this.http.get<IPlanetsCollection>(url);
  }

  // test() {
  //   const responseStream = this.http.get<IPlanetsCollection>(this.requestURL);
  //   const subscription = responseStream.subscribe(
  //     (incomingData: IPlanetsCollection) => {
  //       this.allPlanets.push(...incomingData.results);
  //       console.log("incomingData.next: " + incomingData.next)

  //       if (incomingData.next) this.requestURL = incomingData.next;
  //       else subscription.unsubscribe();
  //     },
  //     () => console.log("error while fetching data"),
  //     () => {
  //       this.downloadPlanets();
  //     }
  //   );
  // }

  // return responseStream;



  // return;
  // }

  get1st10PlanetsData(): Observable<IPlanetsCollection> { // This is how this api works. Cant get more at once.
    return this.http.get<IPlanetsCollection>(this.requestURL);
  }

  getNextPlanet(alreadyDownloadedPlanetsAmmount: number): Observable<IPlanet> {
    const nextPlanetIdURL: string = this.requestURL + (alreadyDownloadedPlanetsAmmount + 1);
    return this.http.get<IPlanet>(nextPlanetIdURL);
  }

  getNextPlanets(url:string): Observable<IPlanetsCollection> {
    return this.http.get<IPlanetsCollection>(url);
  }


};