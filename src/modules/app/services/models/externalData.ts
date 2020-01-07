import { IPlanet } from './planet';

export interface IPlanetsCollection {
  count: number;
  next: string | null;
  results: IPlanet[];
}