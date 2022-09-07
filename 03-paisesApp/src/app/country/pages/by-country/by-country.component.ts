import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent{
  termino: string = "";

  constructor() { }
  buscar() {
    console.log(this.termino);

  }
}
