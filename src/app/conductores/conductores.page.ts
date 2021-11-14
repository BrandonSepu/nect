import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  constructor(private crud: CrudService,
              private toast: ToastController) {
                this.listar();
              }

  listadoUser = [];

  async listar(){
    this.listadoUser = this.crud.listar();
  }
  ngOnInit() {
    
  }
  


}
