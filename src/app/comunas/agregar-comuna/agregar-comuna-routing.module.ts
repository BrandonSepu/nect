import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarComunaPage } from './agregar-comuna.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarComunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarComunaPageRoutingModule {}
