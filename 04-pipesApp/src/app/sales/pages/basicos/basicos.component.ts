import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  uppercase: string = "DOLY"
  lowercase: string = "doly"
  nameComplete: string = "dOly JimenEZ"

  fecha: Date = new Date()

}
