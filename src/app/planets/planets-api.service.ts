import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class PlanetsApiService {
  private serverURL = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { } 
  // constructor() { }

  public getNumber(): number {
    return 76;
  }

  getPlanetsAmmount(): Observable<IExternalData> {
    return this.http.get<IExternalData>(this.serverURL);
  }
};

//////////////////////////////////

interface IExternalData {
  count: number;
  // "next": "https://swapi.co/api/planets/?page=2",
  // "previous": null,
  results: IPlanet[];
}

interface IPlanet {
  name: string;
  rotation_period: number,
  orbital_period: number,
  diameter: number, // średnica
  climate: string,
  gravity: string,
  terrain: string, mountains,
  surface_water: number,
  population: number,
  residents: string[],
  films: string[],
  created: Date,
  edited: Date,
  url: string,
}