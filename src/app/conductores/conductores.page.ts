import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Parser } from '@angular/compiler/src/ml_parser/parser';


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
  listadoUserEmail = [];
  contador = 0;

  refresh() {
    window.location.reload();
  }

  async listar(){
    this.listadoUser = this.crud.listar();
    return this.listadoUser;
  }
  ngOnInit() {
    
  }
  
  async eliminar(indice: HTMLInputElement){
    console.log(indice)
    this.listadoUserEmail = this.crud.listarEmail();
    console.log(this.listadoUserEmail);
    /*this.listadoUser.forEach(async (value, key, i) => {
      
      /*if(txtemail == value[0].email){
        //const email = value[0].email;
        console.log("funciona: "+ txtemail)
        this.crud.eliminar(txtemail.textContent);

        const mtoast = await this.toast.create({
          message: "Conductor Bloqueado para siempre",
          duration: 2000,
          color: "success",
          position: "middle"
        })
        mtoast.present();
      }else{
        const mtoast = await this.toast.create({
          message: "Error al Bloquear conductor",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
      }
      //this.router.navigate(["/index"]);
    });*/
  }


}
