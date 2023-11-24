import { Component, Input } from '@angular/core';
import { Item } from '../../../../core/model/item';

@Component({
  selector: 'app-inventory-slot',
  templateUrl: './inventory-slot.component.html',
  styleUrl: './inventory-slot.component.scss'
})
export class InventorySlotComponent {
  @Input() item: Item | null = null;
}
