import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowStateService {
  private openWindowSubject = new BehaviorSubject<string | null>(null);
  openWindow$ = this.openWindowSubject.asObservable();

  get currentOpenWindow(): string | null {
    return this.openWindowSubject.value;
  }

  openWindow(windowId: string): void {
    if (this.currentOpenWindow !== windowId) {
      this.closeCurrentWindow();
      this.openWindowSubject.next(windowId);
    }
  }

  closeWindow(): void {
    this.closeCurrentWindow();
  }

  setDefaultWindow(defaultWindowId: string | null): void {
    this.openWindowSubject.next(defaultWindowId);
  }

  private closeCurrentWindow(): void {
    this.openWindowSubject.next(null);
  }
}