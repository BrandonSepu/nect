import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditclavePage } from './editclave.page';

const routes: Routes = [
  {
    path: '',
    component: EditclavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditclavePageRoutingModule {}
