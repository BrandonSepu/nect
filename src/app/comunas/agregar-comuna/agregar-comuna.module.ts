import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarComunaPageRoutingModule } from './agregar-comuna-routing.module';

import { AgregarComunaPage } from './agregar-comuna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarComunaPageRoutingModule
  ],
  declarations: [AgregarComunaPage]
})
export class AgregarComunaPageModule {}
