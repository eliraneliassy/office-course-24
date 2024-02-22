import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true
})
export class InfiniteScrollDirective {

  elementRef = inject(ElementRef);

  @Input() page = 0;

  @HostListener('window:scroll') onScroll() {

      const distanceFromBottom = this.getDistanceFromBottom();

      console.log(distanceFromBottom);

      // Perform actions based on the distance:
      if (distanceFromBottom <= 50) {
        // Do something when near the bottom
        console.log('Near the bottom:', distanceFromBottom);
      }
    }

  private getDistanceFromBottom(): number {
      const elRect = this.elementRef.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

      // Ensure bottom edge of element doesn't go beyond document height
      const elementBottom = Math.min(elRect.bottom, documentHeight);

      return windowHeight - elementBottom;
    }




}
