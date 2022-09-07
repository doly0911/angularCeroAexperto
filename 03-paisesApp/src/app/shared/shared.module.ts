import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './sideBar/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    SideBarComponent
  ],

  exports:[
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
