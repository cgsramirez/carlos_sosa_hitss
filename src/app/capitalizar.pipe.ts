import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string): string {
    value.toLowerCase();
    let nombre=  value.split(' ');
    nombre= nombre.map( nombre=> {
      return nombre.charAt(0).toUpperCase() + nombre.substring(1);
    })

    return nombre.join(' ');
  } 


}
