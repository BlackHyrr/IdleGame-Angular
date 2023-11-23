import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  private menuVisibleSubject = new BehaviorSubject<boolean>(false);
  menuVisible$ = this.menuVisibleSubject.asObservable();

  toggleMainMenu(): void {
    this.menuVisibleSubject.next(!this.menuVisibleSubject.value);
  }
}