import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DemoComponent } from './pages/demo/demo.component';
import { FallasComponent } from './pages/fallas/fallas.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'demo', 
    component: DemoComponent
  },
  { 
    path: 'fallas', 
    component: FallasComponent
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    redirectTo: '/home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
