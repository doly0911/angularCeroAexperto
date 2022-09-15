import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent implements OnInit {
  termino: string = "";
  hayError: boolean = false;
  listaDeCapitales: Country[] = []

  constructor(private countrySerice: CountryService) { }

  ngOnInit(): void {
  }

  buscar(valor:string) {
    this.hayError = false;
    this.termino = valor;
    this.countrySerice.buscarCapital(valor)
    .subscribe(resp => {
      this.listaDeCapitales = resp
    }, error =>{
      this.hayError = true;
      this.listaDeCapitales=[];
    })
  }

}
