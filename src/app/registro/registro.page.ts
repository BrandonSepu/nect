import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private crud: CrudService,
              private toast: ToastController,
              private router: Router) { }

  ngOnInit() {
  }

  async agregar(txtusername: HTMLInputElement, txtemail: HTMLInputElement, txtrut: HTMLInputElement, txtcelular: HTMLInputElement, txtpassword: HTMLInputElement){
    
    if (txtcelular.value && txtemail.value && txtpassword.value && txtrut.value && txtusername.value){
      if(txtcelular.value.length != 9){
        const mtoast = await this.toast.create({
          message: "Celular mal ingresado, recuerda comenzar con el 9",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
      }else if (txtrut.value.length != 10){
        const mtoast = await this.toast.create({
          message: "Rut mal ingresado, recuerda sin puntos y con guion",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
      }else if (txtpassword.value.length < 8){
        const mtoast = await this.toast.create({
          message: "Clave mal ingresada, recuerda 8 caracteres o +",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
      }else if (txtusername.value.length < 5){
        const mtoast = await this.toast.create({
          message: "Nombre de usuario mal ingresado, recuerda 5 caracteres o +",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
      }else{
        const data= [{"username": txtusername.value,
                    "email": txtemail.value,
                    "rut": txtrut.value,
                    "celular": txtcelular.value,
                    "password": txtpassword.value
                  }]
        await this.crud.agregarConKey(txtemail.value, data);
        const mtoast = await this.toast.create({
        message: "Cuenta Exitosamente Creada!",
        duration: 2000,
        color: "success",
        position: "middle"
        })
        mtoast.present();
        this.router.navigate(["/login"]);        
      }
      
    }else{
      const mtoast = await this.toast.create({
        message: "Falta un campo por llenar :c",
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      mtoast.present();
    }
  };

}
