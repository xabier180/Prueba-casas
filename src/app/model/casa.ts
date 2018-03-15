import {Servicio} from './servicio'

export class Casa{

    nombre : string;
    precio : number;
    alquiler: boolean;
    habitaciones : number;
    foto : string;
    direccion : string;
    servicios : Servicio[];

    constructor( nombre : string ){

    }


}