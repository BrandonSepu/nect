import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComunaPageRoutingModule } from './detalle-comuna-routing.module';

import { DetalleComunaPage } from './detalle-comuna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleComunaPageRoutingModule
  ],
  declarations: [DetalleComunaPage]
})
export class DetalleComunaPageModule {}
