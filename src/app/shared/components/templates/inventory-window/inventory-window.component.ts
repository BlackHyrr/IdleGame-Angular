import { Component } from '@angular/core';
import { WindowStateService } from '../../../../core/services/window-state.service';

@Component({
  selector: 'app-inventory-window',
  templateUrl: './inventory-window.component.html',
  styleUrl: './inventory-window.component.scss'
})
export class InventoryWindowComponent {
  constructor( protected windowStateService: WindowStateService) {
  }
}
