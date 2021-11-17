import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  users = [];
  constructor(private toast: ToastController,
              private router: Router) { 
                this.users = [{"user" : localStorage.getItem("user")}];
                console.log(this.users)
              }
  
  async refresh() {
    window.location.reload();
  }
              
  async logout(){
    
    console.log(localStorage.getItem("user"))
    const mtoast = await this.toast.create({
      message: "Hasta luego "+ localStorage.getItem("user"),
      duration: 2000,
      color: "success",
      position: "middle"
    })
    mtoast.present();
    localStorage.clear();
    this.router.navigate(["/home"]);
  } 

  ngOnInit() {
    
  }

  

}
