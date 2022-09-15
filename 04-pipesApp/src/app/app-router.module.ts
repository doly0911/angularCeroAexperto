import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { BasicosComponent } from './sales/pages/basicos/basicos.component';
import { NumerosComponent } from './sales/pages/numeros/numeros.component';
import { NoComunesComponent } from './sales/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './sales/pages/ordenar/ordenar.component';


const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
