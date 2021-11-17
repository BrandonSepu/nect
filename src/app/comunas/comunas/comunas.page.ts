import { Component, OnInit } from '@angular/core';
import { ComunaService } from 'src/app/servicios/comuna.service';

@Component({
  selector: 'app-comunas',
  templateUrl: './comunas.page.html',
  styleUrls: ['./comunas.page.scss'],
})
export class ComunasPage implements OnInit {
  comunas = []

  constructor(private comunaService: ComunaService) { }

  ngOnInit() {
    this.comunaService.cargarComunas()
    .subscribe(data => {
      this.comunas = data
    })
  }



  
}
