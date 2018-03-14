import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-detalle-casas',
  templateUrl: './detalle-casas.component.html',
  styleUrls: ['./detalle-casas.component.scss']
})
export class DetalleCasasComponent implements OnInit {

  @Input('c') c : Todo;

  constructor() { }

  ngOnInit() {
  }

}
