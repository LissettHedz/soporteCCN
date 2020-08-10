import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { FallasComponent } from './fallas/fallas.component';




@NgModule({
  declarations: [DemoComponent, HomeComponent, FallasComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
