// tooltip.directive.ts
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input, Renderer2 } from '@angular/core';
import { TooltipComponent } from '../components/molecules/tooltip/tooltip.component';
import { Item } from '../../core/model/item';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input('appTooltip') item: Item | null = null;

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.componentRef === null && this.item !== null) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
      this.componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(this.componentRef.hostView);
      this.componentRef.instance.item = this.item;

      const boundingBox = this.elementRef.nativeElement.getBoundingClientRect();
/*       const left = boundingBox.left + window.scrollX;
      const top = boundingBox.top + window.screenY + boundingBox.height; */
      const right = boundingBox.width / 2

      this.renderer.setStyle(this.componentRef.location.nativeElement, 'position', 'absolute');
      this.renderer.setStyle(this.componentRef.location.nativeElement, 'bottom', `0px`);
      this.renderer.setStyle(this.componentRef.location.nativeElement, 'right', `${right}px`);
      
      this.elementRef.nativeElement.appendChild(this.componentRef.location.nativeElement);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}