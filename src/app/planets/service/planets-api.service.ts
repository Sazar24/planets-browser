import { IPlanet } from './../models/planet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExternalData } from '../models/externalData';

@Injectable(
  { providedIn: 'root' }
)
export class PlanetsApiService {
  private serverURL = 'https://swapi.co/api/planets/';
  counter: number = 1;

  constructor(private http: HttpClient) { }
  // constructor() { }

  getPlanetsData(): Observable<IExternalData> {
    this.counter++;
    console.log(`counter: ${this.counter}`);
    return this.http.get<IExternalData>(this.serverURL);

  }

  // getPlanets(): Observable<IPlanet[]>{
  //   return this.http.get()
  // }

};