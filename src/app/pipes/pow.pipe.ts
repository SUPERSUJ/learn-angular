import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {
  transform(value: number, exponent: string, num: string = '1'): any {
    let exp = parseFloat(exponent);
    let n = parseFloat(num);
    return Math.pow(value, isNaN(exp) ? 1 : exp) / n;
  }
}
