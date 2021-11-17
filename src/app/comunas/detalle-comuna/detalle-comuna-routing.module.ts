import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComunaPage } from './detalle-comuna.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleComunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleComunaPageRoutingModule {}
