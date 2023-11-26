import { Component, Input } from '@angular/core';
import { WindowStateService } from '../../../../core/services/window-state.service';
import { PlayerService } from '../../../../core/services/player.service';
import { Subscription } from 'rxjs';
import { Player } from '../../../../core/model/player';
import { Item } from '../../../../core/model/item';
import { ItemService } from '../../../../core/services/item.service';

@Component({
  selector: 'app-inventory-window',
  templateUrl: './inventory-window.component.html',
  styleUrl: './inventory-window.component.scss'
})
export class InventoryWindowComponent {
  @Input() public inventorySlots: (Item | null)[] = [];

  constructor(private playerService: PlayerService, protected windowStateService: WindowStateService, private itemService: ItemService) {
  }

  player: Player | null = null;
  private playerSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.playerSubscription = this.playerService.player$.subscribe(player => {
      this.player = player;
      
      if (this.player) {
        this.initializeInventorySlots();
        this.itemService.generateItem(8, 'weapon').subscribe(newItem1 => {
          this.addItemToInventory(newItem1);
        });
        this.itemService.generateItem(63, 'armor').subscribe(newItem2 => {
          this.addItemToInventory(newItem2);
        });
        this.itemService.generateItem(28, 'weapon').subscribe(newItem3 => {
          this.addItemToInventory(newItem3);
        });
        this.itemService.generateItem(36, 'armor').subscribe(newItem4 => {
          this.addItemToInventory(newItem4);
        });
        this.itemService.generateItem(80, 'weapon').subscribe(newItem5 => {
          this.addItemToInventory(newItem5);
        });
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
