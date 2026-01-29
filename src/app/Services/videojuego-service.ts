import { Injectable } from '@angular/core';
import { guardarDatos, recuperarDatos } from '../Storage/localStorage';

@Injectable({
  providedIn: 'root',
})
export class VideojuegoService {
  arrVideojuegos:any[]

  constructor(){
    this.arrVideojuegos=recuperarDatos()
  }

  insertar(obj:any){
    this.arrVideojuegos.push(obj)
    guardarDatos(this.arrVideojuegos)
  }

  eliminar(id:number) {
    this.arrVideojuegos = this.arrVideojuegos.filter((elemento) => elemento.id != id);
    guardarDatos(this.arrVideojuegos)
  }

}
