import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './Components/index';
import { Insertar } from './Components/insertar/insertar';
import { Visualizar } from './Components/visualizar/visualizar';

const routes: Routes = [
  {path:'',component:Index},
  {path:'insertar',component:Insertar},
  {path:'visualizar',component:Visualizar},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
