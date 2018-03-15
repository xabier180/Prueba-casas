import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';

@Component({
  selector: 'app-detalle-casas',
  templateUrl: './detalle-casas.component.html',
  styleUrls: ['./detalle-casas.component.scss']
})
export class DetalleCasasComponent implements OnInit {

  @Input('c') c : Casa;

  constructor() { }

  ngOnInit() {
  }

}
