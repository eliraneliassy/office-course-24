import {AfterViewInit, Directive, ElementRef, inject, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective implements AfterViewInit{

  elementRef = inject<ElementRef>(ElementRef);
  renderer = inject(Renderer2);

  @Input() color?: string;


  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', this.color)
    }

}
