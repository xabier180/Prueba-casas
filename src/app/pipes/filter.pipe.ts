import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 /**
  * Filtro para buscar en una coleccion de coches. No es CaseSensitive
  * @param todos : Todo[]
  * @param searchText : string con la marca o modelo del coche
  */

  transform(todos: Todo[], searchText: string): Todo[] {

    if(!todos) return [];
    if(!searchText) return todos;
    searchText = searchText.toLowerCase();
    let nombrePrecio = "";
    return todos.filter( todoIt => {
        nombrePrecio =  todoIt.nombre + " " +  todoIt.precio;
        return nombrePrecio.toLowerCase().includes(searchText);
    });
   }

}