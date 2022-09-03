import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;



  constructor(private gifsService: GifsService){

  }

  buscar() {
    this.gifsService.buscarGift(this.txtBuscar.nativeElement.value)
    this.txtBuscar.nativeElement.value = ''

  }


}
