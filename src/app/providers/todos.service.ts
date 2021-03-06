import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Casa } from '../model/casa';
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

post(casa:Casa){
    let url = END_POINT + '/todos/';
    console.log(`TodosService put ${url}`);

    let body = {
                  // "id": todo.id,
                  "nombre": casa.nombre,
                  "precio": casa.precio,
                  "alquiler": casa.alquiler    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }

 




}