import { Component } from '@angular/core';
import { PlayerService } from '../../../../core/services/player.service';
import { Subscription } from 'rxjs';
import { Player } from '../../../../core/model/player';

@Component({
  selector: 'app-experience-bar',
  templateUrl: './experience-bar.component.html',
  styleUrl: './experience-bar.component.scss'
})
export class ExperienceBarComponent {
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
