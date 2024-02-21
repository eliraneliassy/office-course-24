import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    if(value > 100) {
      return value * 0.9;
    }

    return value;
  }

}
