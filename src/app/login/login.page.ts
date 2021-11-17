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
              private router: Router) { 
                
              }              

  ngOnInit() {
    localStorage.clear();
  }

  tokenEmail = "";
  tokenPass = "";

  async login(txtemail: HTMLInputElement, txtpassword: HTMLInputElement){
    try{
      if (txtemail.value && txtpassword.value){
        this.tokenEmail = txtemail.value;
        this.tokenPass  = txtpassword.value;
        
        const data = await this.crud.rescatar(this.tokenEmail);
        
        if(data[0].password == this.tokenPass){
          
          const tokenUser = data[0].username;
          localStorage.setItem("user", tokenUser)
          localStorage.setItem("email", this.tokenEmail)
          localStorage.setItem("pass", this.tokenPass)
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
    }catch(e){
      console.log(e);
      const mtoast = await this.toast.create({
        message: "Clave o Usuario invalido, intenta nuevamente",
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      mtoast.present();
    }
  }
}
