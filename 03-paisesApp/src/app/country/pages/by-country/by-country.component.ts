import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent{
  termino: string = "";
  hayError: boolean = false;
  listaDePaises: Country[] = []


  constructor(private countryService: CountryService) { }

  buscar(valor:string) {
    this.hayError = false;
    this.termino = valor
    this.countryService.buscarPais(valor)
    .subscribe((resp) => {
      console.log(resp);
      this.listaDePaises= resp
    }, (err) => {
      this.hayError = true;
      this.listaDePaises=[];
    });
  }
}
