import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit {

  pais!: Country

  constructor(private activatedRoute: ActivatedRoute,
              private countryService:CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countryService.buscarPorCodigo(id)),
      tap(console.log)
      )
      .subscribe(
      pais => {
        this.pais = pais
      }
    )

  }

}
