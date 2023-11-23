import { Component, Input } from '@angular/core';
import { Player } from '../../../../core/model/player';
import { PlayerService } from '../../../../core/services/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-resource',
  templateUrl: './player-resource.component.html',
  styleUrl: './player-resource.component.scss'
})
export class PlayerResourceComponent {
  @Input() resourceName: string = '';
  @Input() resourceCssId: string = '';

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

  get currentResource(): number {
    return (this.player?.stats[this.resourceName.toLowerCase()] as number) || 0;
  }

  get maxResource(): number {
    return (this.player?.stats['max' + this.resourceName] as number) || 0;
  }
} 
