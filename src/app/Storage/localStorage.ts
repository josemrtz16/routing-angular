
  export function recuperarDatos() {
    let datos = localStorage.getItem('arrVideojuegos');
    if (datos == null) {
      return [];
    } else {
      return JSON.parse(datos);
    }
  }

  export function guardarDatos(datos:any[]) {
    const datosJSON = JSON.stringify(datos);
    localStorage.setItem('arrVideojuegos', datosJSON);
  }
