import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';
import { GLOBAL } from '../global';

const END_POINT = "http://localhost:3000";


@Injectable()
export class TodosService {
  

  constructor( public http: HttpClient) { 
    console.log('TodosService constructor');
  }


  getTodos():Observable<any>{

    let url = END_POINT + '/todos';
    console.log(`TodosService getTodos ${url}`);
    return this.http.get(url);

  }

  delete(id){
    let url = END_POINT + '/todos/'+id;
    console.log(`TodosService delete ${url}`);
    return this.http.delete(url);
  }

post(todo:Todo){
    let url = END_POINT + '/todos/';
    console.log(`TodosService put ${url}`);

    let body = {
                  // "id": todo.id,
                  "nombre": todo.nombre,
                  "precio": todo.precio,
                  "alquiler": todo.alquiler    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }

 




}