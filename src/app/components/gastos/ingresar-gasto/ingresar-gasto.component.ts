import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
   textIncorrecto: string;

  constructor(private _presupuestoService : PresupuestoService) {
    this.nombreGasto = '',
    this.cantidad = 0;
    this.formularioIncorrecto= false;
    this.textIncorrecto = 'Nombre de gasto o cantidad incorrecta'
   }

  ngOnInit(): void {
  }

  agregarGasto(){

  if(this.cantidad > this._presupuestoService.restante){

    this.formularioIncorrecto = true;

    this.textIncorrecto = "Cantidad Ingresada es mayor al restante"

    return;
  }
   else {

    const GASTO = {
      nombre: this.nombreGasto,
      cantidad: this.cantidad
    }


    this._presupuestoService.agregarGasto(GASTO)


    if(this.nombreGasto === ''  || this.cantidad <= 0){
      this.formularioIncorrecto = true

    }

    else {
      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }

  } 

}
