import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'Z1JlknMecLdmnbCbbTAklkdVKKi9PxcE'
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

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=Z1JlknMecLdmnbCbbTAklkdVKKi9PxcE&q=${query}&limit=10`)
    .subscribe(resp => {
      this.resultados = resp.data
      localStorage.setItem('resultados', JSON.stringify(this.resultados))
      console.log("data compelta:", resp);
      console.log("resultados del Gif: ", this.resultados);

    })
  }






}
