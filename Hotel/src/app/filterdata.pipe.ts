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
    // return filter 
// <<<<<<< HEAD
//      ? items.filter(e =>e[label].toLowerCase().tostring().indexOf(value) > -1 )
// =======
//      ? items.filter(e =>e[label].toString().toLowerCase().indexOf(value)> -1 )
// >>>>>>> 9d37cce63b6845157583c99c7b0074d1795f3dae
//     : items;
   
  }

  // transform(items:any,term:any):any{
  //   if(term){
  //     return items.filter(item =>{
  //       return Object.keys(item).some(
  //         k => {
  //           if (item[k] != null && item[k] != undefined && typeof item[k] == 'string')
  //           return item[k].includes(term.toLowerCase());
  //         });
  //     });
  //   }
  //   return items;
  // }
}

