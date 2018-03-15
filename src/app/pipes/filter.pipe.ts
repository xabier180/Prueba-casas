import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 /**
  * Filtro para buscar en una coleccion de casas. No es CaseSensitive
  * @param casas : Casa[]
  * @param searchText : string con la marca o modelo del coche
  */

  transform(casas: Casa[], searchText: string, ckAlquiler: boolean, ckVenta: boolean): Casa[] {

    if(!casas) return [];
    if(!searchText) return casas;

   


    //Filtro por nombre o direccion
    searchText = searchText.toLowerCase();
    let nombreDireccion = "";
    return casas.filter( todoIt => {
        nombreDireccion =  todoIt.nombre + " " +  todoIt.direccion;
        return nombreDireccion.toLowerCase().includes(searchText);
    });
   }

}