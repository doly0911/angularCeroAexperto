import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = []

  get historial() {
    return [...this._historial]
  }

  buscarGift(query: string){

    if (query.trim().length==0){
      return;
    }

    const queryLoweCase: string = query.toLowerCase()

    if(!this._historial.includes(queryLoweCase)){
      this._historial.unshift(queryLoweCase)
      this._historial = this._historial.slice(0,10)
    }



    console.log("array de gifs", this._historial)
  }

}
