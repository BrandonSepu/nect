import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) { 
    this.init();
    this.listar();
  }

  async init(){
    await this.storage.create();
  }

  async agregarConKey(key: string, valor: any){
    await this.storage.set(key, valor);
  }

  async agregar(valor: any){
    let id = await this.storage.length() + 1;
    await this.storage.set(id.toString(), valor)
  }

  async rescatar(key: string){

    const data = await this.storage.get(key);
    const pass = data.password;
    //console.log(data);
    return data;
  }

  listar(){
    const listado = [];
    this.storage.forEach((value, key, i) => {
      listado.push(value);
    });
    return listado;
  }

  contador = -1;
  listarEmail(){
    const listado = [];
    this.storage.forEach((value, key, i) => {
      this.contador = this.contador + 1;
      listado.push(value[0].email);
    });
    return listado;
  }

  eliminar(key: string){
    this.storage.remove(key);
  }

} 

