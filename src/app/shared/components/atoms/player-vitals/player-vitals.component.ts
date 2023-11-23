import { Component } from '@angular/core';
import { PlayerService } from '../../../../core/services/player.service';
import { Player } from '../../../../core/model/player';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-vitals',
  templateUrl: './player-vitals.component.html',
  styleUrl: './player-vitals.component.scss'
})
export class PlayerVitalsComponent {
  player: Player | null = null;
  private playerSubscription: Subscription | undefined;
  
  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.playerSubscription = this.playerService.player$.subscribe(player => {
      this.player = player;
    });
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
  }
}
