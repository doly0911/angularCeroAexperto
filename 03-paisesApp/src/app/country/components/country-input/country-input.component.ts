import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent{

  @Output() onEnter: EventEmitter<string> = new EventEmitter
  termino: string= ""


  constructor() { }

  buscar(){
    console.log(this.termino);

    this.onEnter.emit(this.termino)
  }


}
