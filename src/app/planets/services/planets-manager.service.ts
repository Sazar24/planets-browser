import { Injectable } from '@angular/core';
import { IPlanet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsManagerService {

  addIdPropertyForEachInArray(array:IPlanet[]){
    array.forEach((item,index)=>{
      item.appId = index+1; 
    })
  }

  createIdProperty(item:IPlanet, id:number){
    item.appId = id+1;
    return item;
  }
  constructor() { }
}
