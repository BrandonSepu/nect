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

  constructor(private crud: CrudService,
              private toast: ToastController,
              private router: Router) { 

              }

  ngOnInit() {
  }

  

  async update(txtrut: HTMLInputElement, txtemail: HTMLInputElement){

  }

}
