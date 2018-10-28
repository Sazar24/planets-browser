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

  constructor(private http: HttpClient) { }

  getNextPlanets(url: string): Observable<IPlanetsCollection> {
    return this.http.get<IPlanetsCollection>(url);
  }

  getPlanetById(id: number): Observable<IPlanet> {
    const url: string = this.requestURL + `/${id}`;
    return this.http.get<IPlanet>(url);
  }

};