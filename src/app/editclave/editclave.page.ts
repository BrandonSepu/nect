import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editclave',
  templateUrl: './editclave.page.html',
  styleUrls: ['./editclave.page.scss'],
})
export class EditclavePage implements OnInit {
  rut: any;
  usernameuser: any;
  celularuser: any;

  constructor(private crud: CrudService,
              private toast: ToastController,
              private router: Router) { 

              }

  ngOnInit() {
  }

  

  async edit(txtemail: HTMLInputElement, txtpassword : HTMLInputElement)
  {
    try{
      const data = await this.crud.rescatar(txtemail.value);
      if(data){
        this.rut = data[0].rut;
        this.usernameuser = data[0].username;
        this.celularuser = data[0].celular;
      
        const datos = [{
          "rut": this.rut,
          "username":this.usernameuser,
          "celular": this.celularuser,
          "email": txtemail.value,
          "password": txtpassword.value,
        }];
        await this.crud.agregarConKey(txtemail.value,datos);
        const mtoast = await this.toast.create({
          message: "Contraseña cambiada con EXITO!",
          duration: 2000,
          color: "success",
          position: "middle"
        })
        mtoast.present();
        this.router.navigate(["/login"]);
      }else{
        const mtoast = await this.toast.create({
          message: "no se puedo completar la accion, email incorrecto",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
      }
      
    }catch(e){
      console.log(e);
    }
    
    
    
  }

}
