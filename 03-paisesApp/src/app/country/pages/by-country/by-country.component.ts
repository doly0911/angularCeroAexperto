import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent{
  termino: string = "";
  hayError: boolean = false;
  listaDePaises: Country[] = []

  listaDePaisesSugeridos: Country[] = []
  mostrarSugerencias: boolean = false


  constructor(private countryService: CountryService) { }

  buscar(valor:string) {
    this.hayError = false;
    this.mostrarSugerencias = false;
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

  sugerencias(valor:string){
    this.hayError = false;
    this.termino= valor;
    this.mostrarSugerencias = true;

    this.countryService.buscarPais(valor).subscribe(
      paises => this.listaDePaisesSugeridos = paises.splice(0,5),
      (err) => this.listaDePaisesSugeridos = []
    )
  }

  buscarSugerido(termino: string){
    this.buscar(termino)

  }
}
