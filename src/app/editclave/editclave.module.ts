import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditclavePageRoutingModule } from './editclave-routing.module';

import { EditclavePage } from './editclave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditclavePageRoutingModule
  ],
  declarations: [EditclavePage]
})
export class EditclavePageModule {}
