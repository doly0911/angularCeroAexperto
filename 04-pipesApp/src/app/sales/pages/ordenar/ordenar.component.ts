import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent implements OnInit {

  heroes: Heroe[] = [
    {
      nombre: 'thor',
      vuela: false,
      color: 'rojo'
    },
    {
      nombre: 'falcon',
      vuela: true,
      color: 'azul'
    },
    {
      nombre: 'spiderman',
      vuela: false,
      color: 'rojo oscuro'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
