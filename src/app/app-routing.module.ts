import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InserirComponent } from './inserir/inserir.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { RemoverComponent } from './remover/remover.component';

const routes: Routes = [
  { path: '', component: InserirComponent },
  { path: 'inserir', component: InserirComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'remover', component: RemoverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
