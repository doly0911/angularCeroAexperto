import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Doly'
  genero: string = 'femenino'
  generoMap = {
    'femenino': 'invitarla',
    'masculino': 'invitarlo'
  }

  //i18nPlural
  clientes: string[] = ['mona', 'dani', 'doly', 'jhonatan']
  clientesMapping = {
    '=0': 'Actualmente no tenemos clientes esperando.',
    '=1': 'Actualmente tenemos un cliente esperando.',
    'other': 'Actualmente tenemos # clientes esperando.'
  };
  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.nombre = 'Jhonatan';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //Key value pipe
  persona = {
    direccion: 'Medellin',
    edad: 35,
    nombre: 'pepito'
  }

}
