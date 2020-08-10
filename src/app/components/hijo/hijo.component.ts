import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() servicioHijo: string = ' sin servicio';
  @Output() cambioServicioHijo = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  cambiarServicio(){
    this.servicioHijo = 'Internet';
    this.cambioServicioHijo.emit( this.servicioHijo );
  }

}
