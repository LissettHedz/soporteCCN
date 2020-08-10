import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  servicio: string = 'Tipo de Servicio';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarServicio(){
    this.servicio = 'Television';
  }

}
