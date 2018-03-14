import { Component, OnInit } from '@angular/core';
import {TodosService} from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.scss']
})
export class CasasComponent implements OnInit {

  todos: Todo[];
  nombre: string;
  casa_seleccionada: Todo;
  nuevaTarea : string;

  constructor(public todosService:TodosService) {
    this.nombre = "Casa";

    console.log('CasasComponent constructor');

      this.casa_seleccionada = new Todo('casa_seleccionada');
      this.todos = [];
   }

  ngOnInit() {
    this.cargarCasas();
    console.log('CasasComponent ngOnInit');
  }

  cargarCasas(){
    console.log('CasasComponent cargarCasas');
    this.todos = [];
    this.todosService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

  /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapeo( result : any ){

    let todo:Todo;
    result.forEach(el => {
        todo = new Todo( el.title );
        todo.nombre = el.nombre;
        todo.precio = el.precio;
        todo.habitaciones = el.habitaciones;
        todo.foto = el.foto;
        todo.alquiler = el.alquiler;
        todo.direccion = el.direccion;
        

        this.todos.push(todo);
    });

  }

  seleccionarCasa(casa:Todo){
    console.log('CasasComponent: seleccionarCasa %o', casa);               
  
    this.casa_seleccionada = casa;   
  }
/*
  change(todo:Todo){
    console.log('UnoComponent change %o', todo );
    this.todosService.patch(todo).subscribe(     
        result=>{
          console.log('Tarea modificada con exito %o', result);
          this.cargarCasas();
        },
        error=>{
          alert('No se pudo Modificar la Tarea');
        }      
    );
  }

*/

  delete(todo:Todo){
    console.log('UnoComponent delete %o', todo );

    this.todosService.delete(todo.nombre).subscribe(
      result=>{
        this.cargarCasas();
      },
      error=>{
        alert('No se pudo elimiar Tarea');
      }
    );
  }

  new(){
    console.log('UnoComponent new ');
    let todo = new Todo(this.nuevaTarea);
    /*
    let todo = new Todo(this.nuevaTarea);
    this.todos.unshift(todo);
    this.nuevaTarea = "";
    */
    this.todosService.post(todo).subscribe(
      result=>{
        console.log('UnoComponent new %o', result);
        this.cargarCasas();
      },
      error=>{
        alert('No se pudo Crear Nueva Tarea');
        console.error(error);
      }
    );
  }


}
