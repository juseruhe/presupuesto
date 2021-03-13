import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.nombreGasto = '',
    this.cantidad = 0;
    this.formularioIncorrecto= false;
    this.textIncorrecto = 'Nombre gasto o cantidad incorrecta'
   }

  ngOnInit(): void {
  }

  agregarGasto(){
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
