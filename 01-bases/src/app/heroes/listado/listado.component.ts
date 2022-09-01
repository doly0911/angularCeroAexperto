import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroesMarvel: string[] = ["Ironman", "Thor", "spiderMan", "Hulk"]
  heroeRemoved: string = ""

  borrarHeroe(){
    this.heroeRemoved = this.heroesMarvel.splice(0,1)[0]
  }

}
