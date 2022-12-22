import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value:string): string{
    return value.toUpperCase();
  }

}
