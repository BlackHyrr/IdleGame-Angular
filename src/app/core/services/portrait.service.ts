import { Injectable } from '@angular/core';
import { portraits } from '../model/portraitsMockup';

@Injectable({
  providedIn: 'root'
})
export class PortraitService {
  portraitsList: string[] = [];
  constructor() { }

  getPortraits():Array<string> {
    return this.portraitsList = portraits;
  }
}
