import { Component } from '@angular/core';
import { VideojuegoService } from '../../Services/videojuego-service';

@Component({
  selector: 'app-visualizar',
  standalone: false,
  templateUrl: './visualizar.html',
  styleUrl: './visualizar.css',
})
export class Visualizar {
  constructor(public servicio:VideojuegoService){

  }

  eliminar(id:number){
    this.servicio.eliminar(id)
  }
  

}
