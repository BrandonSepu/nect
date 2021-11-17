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
  //listadoUserEmail = [];
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
  
  username = "";
  email = "";
  rut = "";
  celular = "";
  async search(txtemail2: HTMLInputElement){
    
    const user = await this.crud.rescatar(txtemail2.value);
    this.username = user[0].username;
    this.email = user[0].email;
    this.rut = user[0].rut;
    this.celular = user[0].celular;
    txtemail2.value = "";
  }

  async eliminar(txtemail: HTMLInputElement){
      console.log(txtemail.value)
      try{
        const user = await this.crud.rescatar(txtemail.value)
        if(user){
          console.log("funciona: "+ user[0].email)
          await this.crud.eliminar(user[0].email);
  
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
      }catch(e){
        console.log(e);
        const mtoast = await this.toast.create({
          message: "Error al Bloquear conductor, ingresa el email otra vez",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
      }
  }
}
