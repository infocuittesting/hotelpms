import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operator/filter';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(items: any[], value: string, label:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == "" || value == null) return [];
    return filter 
     ? items.filter(e =>e[label].toLowerCase().indexOf(value) > -1 )
    : items;
   
  }

}

