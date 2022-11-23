import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    let pre = "";
    let after = value.toString().split('\.')
    let num = value;
    if (value < 0) {
      num = 0 - value;
      pre = "-";
    }
    num = Math.floor(num);
    let test = after[1] === undefined ? '' : ',' + after[1].substring(0, 2);
    return pre + get_value(num) + test + args[0];
  }

}

function get_value(value: number) {
  let s = "";
  while (value > 1000) {
    value = value / 1000;
    s = s + ".000";
  }
  return value + '' + s;
}
