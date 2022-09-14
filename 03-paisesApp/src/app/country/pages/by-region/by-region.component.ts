import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px
    }

    `
  ]
})
export class ByRegionComponent  {

  regiones: string[] = ["EU", "EFTA", "CARICOM","PA", "AU", "USAN",
                        "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"]


  regionActive: string = ""
  listaDepaises: Country[] = [];


  constructor(private countryService: CountryService) { }

  activarRegion(region: string){
    //Para que no se recargue al estar en la misma region
    //no funciona si va debajo de regionActive = region :v
    if(region === this.regionActive){
      return;
    }
    this.regionActive = region
    this.listaDepaises = []
    this.countryService.buscarPorRegion(region).subscribe(
      paises => {
        console.log("paises: ", paises);

        this.listaDepaises = paises
      }
    )

  }

  getClaseCSS(region: string){
    return (region === this.regionActive) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }


}
