import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url: string =  `${this.baseUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);

   /*  otra forma
    return this.http.get(url).pipe(
      catchError(err => of (['']));
    ); */

  }






}
