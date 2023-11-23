import { Directive, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleVisibility]'
})
export class ToggleVisibilityDirective {

  @Input('appToggleVisibility') toggleConfig: { targetElementId: string, shouldToggle: boolean } = { targetElementId: '', shouldToggle: true };
  
  constructor(private renderer: Renderer2) {}

  @HostListener('click') 
  onClick() {
    if (this.toggleConfig.targetElementId && this.toggleConfig.shouldToggle) {
      const targetElement = this.renderer.selectRootElement(`#${this.toggleConfig.targetElementId}`);
      const currentVisibility = targetElement.style.display || 'block';
      targetElement.style.display = currentVisibility === 'none' ? 'block' : 'none';
    }
  }
}
