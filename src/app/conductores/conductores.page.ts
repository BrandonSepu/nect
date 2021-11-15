import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  constructor(private crud: CrudService,
              private toast: ToastController,
              private router: Router) {
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
    this.listadoUser.forEach(async (value, key, i) => {
      //console.log(value[0].celular)
      if(txtcelular.textContent == value[0].celular.textContent){
        const email = value[0].email;
        console.log("funciona: "+ email)
        this.crud.eliminar(email);

        const mtoast = await this.toast.create({
          message: "Conductor Bloqueado para siempre",
          duration: 2000,
          color: "success",
          position: "middle"
        })
        mtoast.present();
        this.router.navigate(["/index"]);

      }else{
        const mtoast = await this.toast.create({
          message: "Error al Bloquear conductor",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
      }
      
    });
  }


}
