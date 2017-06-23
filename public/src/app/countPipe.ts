import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'count'})
export class Count implements PipeTransform {
  transform(arr: Array<any>): Number {
    return arr.length;
  }
}