import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any , searchTearm: any[]): any {
    return value.filter(function(search){
      return search.name.toLowerCase().indexOf(searchTearm) >-1
    });
  }

}
