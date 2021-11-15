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
    return this.listadoUser;
  }
  ngOnInit() {
    
  }
  
  async eliminar(txtcelular: HTMLLabelElement){
    this.listadoUser.forEach((value, key, i) => {
      console.log(this.listadoUser[key])
      if(txtcelular === this.listadoUser[key].celular){
        const cel = txtcelular;
      }else{
        console.log("error al eliminar")
      }

    });
  }


}
