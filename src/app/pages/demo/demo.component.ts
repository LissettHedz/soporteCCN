import { Component, OnInit } from '@angular/core';
import listadePostres from '../../../assets/json/postres.json';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  Postres: any = listadePostres;

  constructor() { }

  ngOnInit(): void {
  }

}
