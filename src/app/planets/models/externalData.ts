import { IPlanet } from './planet';

export interface IExternalData {
  count: number;
  // "next": "https://swapi.co/api/planets/?page=2",
  // "previous": null,
  results: IPlanet[];
}