import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent {
  public menuMostar : boolean = false;
  constructor() {
  }
  menu(){
    this.menuMostar = !this.menuMostar;
}
}
