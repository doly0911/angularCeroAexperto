import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{

  constructor(private giftsService: GifsService) { }

  //Debe llamarse igual que el get del servicio
  get historial(){
    return this.giftsService.historial

  }



}
