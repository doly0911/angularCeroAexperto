import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'Z1JlknMecLdmnbCbbTAklkdVKKi9PxcE'
  private baseUrl: string = "https://api.giphy.com/v1/gifs"
  private _historial: string[] = []
  public resultados: Gif[] = []




  get historial() {
    return [...this._historial]
  }

  constructor(private http: HttpClient){
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGift(query: string){
    if (query.trim().length==0){
      return;
    }
    const queryLoweCase: string = query.toLowerCase()

    if(!this._historial.includes(queryLoweCase)){
      this._historial.unshift(queryLoweCase)
      this._historial = this._historial.slice(0,10)
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    //Definir parametros de la petición url
    const params =  new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', query)
    .set('limit', 10)

    this.http.get<SearchGifsResponse>(`${this.baseUrl}/search`, {params})
    .subscribe(resp => {
      this.resultados = resp.data
      localStorage.setItem('resultados', JSON.stringify(this.resultados))
    })
  }






}
