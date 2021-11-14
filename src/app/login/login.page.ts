import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private crud: CrudService,
              private toast: ToastController,
              private router: Router) { }

  ngOnInit() {
  }


  async login(txtemail: HTMLInputElement, txtpassword: HTMLInputElement){
    let stop = false;
    if (txtemail.value && txtpassword.value){
      const tokenEmail = txtemail.value;
      const tokenPass = txtpassword.value;
      localStorage.setItem("email", tokenEmail)
      localStorage.setItem("pass", tokenPass)

      const data = await this.crud.rescatar(tokenEmail);

      if(data[0].password == tokenPass){
        this.router.navigate(["/index"]);
        const mtoast = await this.toast.create({
          message: "Bienvenido "+ data[0].username,
          duration: 2000,
          color: "success",
          position: "middle"
        })
        mtoast.present();
      }else{
        const mtoast = await this.toast.create({
          message: "Clave o Usuario invalido, intenta nuevamente",
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        mtoast.present();
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
  }

}
