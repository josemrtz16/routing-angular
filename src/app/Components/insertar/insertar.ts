import { Component } from '@angular/core';
import { VideojuegoService } from '../../Services/videojuego-service';

@Component({
  selector: 'app-insertar',
  standalone: false,
  templateUrl: './insertar.html',
  styleUrl: './insertar.css',
})
export class Insertar {
  constructor(public elservicio:VideojuegoService){}

  insertar(nombre:string,plataforma:string,pvp:string){

    const obj={
      id:Date.now(),
      nombre:nombre,
      plataforma:plataforma,
      pvp:Number(pvp)
    }

    this.elservicio.insertar(obj)
    alert("Se ha insertado correctamente")
  }

}
