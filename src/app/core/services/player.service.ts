import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerSubject: BehaviorSubject<Player | null> = new BehaviorSubject<Player | null>(null);
  public player$: Observable<Player | null> = this.playerSubject.asObservable();

  setPlayer(player: Player): void {
    this.playerSubject.next(player);
  }
  
  constructor() { }
}
