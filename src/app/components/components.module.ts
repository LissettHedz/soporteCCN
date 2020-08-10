import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [NavbarComponent, HijoComponent, DropdownsComponent, MenuComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    HijoComponent,
    DropdownsComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
