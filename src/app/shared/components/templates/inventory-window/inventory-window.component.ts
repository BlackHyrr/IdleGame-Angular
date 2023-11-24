import { Component, Input } from '@angular/core';
import { WindowStateService } from '../../../../core/services/window-state.service';
import { PlayerService } from '../../../../core/services/player.service';
import { Subscription } from 'rxjs';
import { Player } from '../../../../core/model/player';
import { Item } from '../../../../core/model/item';

@Component({
  selector: 'app-inventory-window',
  templateUrl: './inventory-window.component.html',
  styleUrl: './inventory-window.component.scss'
})
export class InventoryWindowComponent {
  @Input() public inventorySlots: (Item | null)[] = [];

  constructor(private playerService: PlayerService, protected windowStateService: WindowStateService) {
  }

  player: Player | null = null;
  private playerSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.playerSubscription = this.playerService.player$.subscribe(player => {
      this.player = player;

      if(this.player) {
        this.initializeInventorySlots();
        let newItem = new Item('test2', 'testdesc', './assets/images/items/tile000.png', 'rare', 400, {});
        this.addItemToInventory(newItem);
        let newItem2 = new Item('test2', 'testdesc', './assets/images/items/tile001.png', 'epic', 400, {});
        this.addItemToInventory(newItem2);
        let newItem3 = new Item('test3', 'testdesc', './assets/images/items/tile011.png', 'legendary', 400, {});
        this.addItemToInventory(newItem3);
        let newItem4 = new Item('test4', 'testdesc', './assets/images/items/tile024.png', 'magic', 400, {});
        this.addItemToInventory(newItem4);
      }
    });
  }

  private initializeInventorySlots(): void {
    if(this.player) {
      this.inventorySlots = Array(this.player.stats.inventorySlots).fill(null);
    }
  }

  addItemToInventory(item: Item): void {
    const firstFreeSlotIndex = this.inventorySlots.findIndex(slot => !slot);
    if (firstFreeSlotIndex !== -1) {
      this.inventorySlots[firstFreeSlotIndex] = item;
    } else {
      console.error('Inventory is full. Cannot add the item.');
    }
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
  }
}
