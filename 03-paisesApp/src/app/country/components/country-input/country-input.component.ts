import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent implements OnInit{

  //Para emitir eventos al Componente padre
  @Output() onEnter: EventEmitter<string> = new EventEmitter
  @Output() onDebounce: EventEmitter<string> = new EventEmitter

  //Pare recibir algo desde el componente padre
  @Input() placeholderValue: string = ""

  termino: string= ""

  //Para crear valores observables
  debouncer: Subject<string> = new Subject


  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      //Decir en cuantos segundos se envia lo que puso el usuario al dejar de escribir
      debounceTime(500)
    )
    .subscribe(valor => {
      //tambien se pude haber enviado el "termino"
      this.onDebounce.emit(valor)
    })
  }

  buscar(){
    console.log(this.termino);
    this.onEnter.emit(this.termino)
  }

  // TO DO cambiar el tipo de valor
  sugerencias(){
    //capturar cada valor ingresado del usuario
    this.debouncer.next(this.termino)
  }


}
