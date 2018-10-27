import { IPlanet } from '../models/planet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlanetsCollection } from '../models/externalData';

@Injectable(
  { providedIn: 'root' }
)
export class PlanetsApiService {
  private serverURL = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  get1st10PlanetsData(): Observable<IPlanetsCollection> { // This is how this api works. Cant get more at once.
    return this.http.get<IPlanetsCollection>(this.serverURL);
  }

  getNextPlanet(alreadyDownloadedPlanetsAmmount: number): Observable<IPlanet> {
    const nextPlanetIdURL: string = this.serverURL + (alreadyDownloadedPlanetsAmmount + 1);
    return this.http.get<IPlanet>(nextPlanetIdURL);
  }
};