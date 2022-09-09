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

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.countryService.buscarPais(this.termino)
    .subscribe((resp) => {
      console.log(resp);
      this.listaDePaises= resp
    }, (err) => {
      this.hayError = true;
      this.listaDePaises=[];
    });
  }
}
