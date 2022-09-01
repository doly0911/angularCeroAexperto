import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  constructor (private dbzService: DbzService) { }

  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    //Sólo emite el evento (envia el valor)
    // this.onNuevoPersonaje.emit(this.nuevo)

    //usamos el servicio
    this.dbzService.agregarPersonaje(this.nuevo)

      this.nuevo = {
        nombre: "",
        poder: 0
      }
  }

}
