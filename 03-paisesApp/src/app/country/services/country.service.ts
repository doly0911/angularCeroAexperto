import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = 'https://restcountries.com/v2'

  //Configurar mas bonito los Params :)... ojo con el espacio! no me retornaba despues del segundo jaja
  get params(){
    return  new HttpParams().set("fields", "name,alpha2Code,capital,population,numericCode,flag")
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url: string =  `${this.baseUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.params});

   /*  otra forma
    return this.http.get(url).pipe(
      catchError(err => of (['']));
    ); */

  }

  buscarCapital(termino:string): Observable<Country[]> {
    const url: string =  `${this.baseUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.params});
  }

  buscarPorCodigo(codigo: string): Observable<Country> {
    const url: string = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Country>(url)
  }

  buscarPorRegion(region:string): Observable<Country[]>{
    const url: string = `${this.baseUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.params})
    .pipe(
      tap(console.log)
    )
  }
}
