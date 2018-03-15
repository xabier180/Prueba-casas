import { Component, OnInit } from '@angular/core';
import {TodosService} from '../providers/todos.service';
import { Casa } from '../model/casa';
import { Servicio } from '../model/servicio';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.scss']
})
export class CasasComponent implements OnInit {

  casas: Casa[];
  nombre: string;
  casa_seleccionada: Casa;
  nuevaTarea : string;

  constructor(public todosService:TodosService) {
    this.nombre = "Casa";

    console.log('CasasComponent constructor');

      this.casa_seleccionada = new Casa('casa_seleccionada');
      this.casas = [];
   }

  ngOnInit() {
    this.cargarCasas();
    console.log('CasasComponent ngOnInit');
  }

  cargarCasas(){
    console.log('CasasComponent cargarCasas');
    this.casas = [];
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

    let casa:Casa, s:Servicio;
    result.forEach(el => {
        casa = new Casa( el.title );
        casa.nombre = el.nombre;
        casa.precio = el.precio;
        casa.habitaciones = el.habitaciones;
        casa.foto = el.foto;
        casa.alquiler = el.alquiler;
        casa.direccion = el.direccion;
        casa.servicios = el.servicios;
        
       /* el.servicios.forEach( el => {
          s = new Servicio(  );
          s.nombre = el.servicios.nombre;
          casa.servicios.push(s);
        }
      ) */

        this.casas.push(casa);
    });

  }

  seleccionarCasa(casa:Casa){
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

  delete(casa:Casa){
    console.log('UnoComponent delete %o', casa );

    this.todosService.delete(casa.nombre).subscribe(
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
    let casa = new Casa(this.nuevaTarea);
    /*
    let todo = new Todo(this.nuevaTarea);
    this.todos.unshift(todo);
    this.nuevaTarea = "";
    */
    this.todosService.post(casa).subscribe(
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
