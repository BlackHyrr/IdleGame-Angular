import { Component, Input } from '@angular/core';
import { WindowStateService } from '../../../../core/services/window-state.service';
import { PlayerService } from '../../../../core/services/player.service';
import { Subscription } from 'rxjs';
import { Player } from '../../../../core/model/player';

@Component({
  selector: 'app-inventory-window',
  templateUrl: './inventory-window.component.html',
  styleUrl: './inventory-window.component.scss'
})
export class InventoryWindowComponent {
  @Input() public inventorySlots: number[] = [];

  constructor(private playerService: PlayerService, protected windowStateService: WindowStateService) {
  }

  player: Player | null = null;
  private playerSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.inventorySlots = new Array(this.player?.stats.inventorySlots);
    this.playerSubscription = this.playerService.player$.subscribe(player => {
      this.player = player;

      if(this.player) {
        this.inventorySlots = new Array(this.player?.stats.inventorySlots);
      }
    });
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
  }
}
