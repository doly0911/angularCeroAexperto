import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { VuelaPipe } from './pipes/vuela.pipe';




@NgModule({
  declarations: [
    //Componentes
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,

    //Pipes
    VuelaPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ]
})
export class SalesModule { }
