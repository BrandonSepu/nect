import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor() { }
  users = [];
  ngOnInit() {
    this.users = [{"user" : localStorage.getItem("user")}];
    console.log(this.users)
  }

}
