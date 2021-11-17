import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {
  url = 'https://digimon-api.vercel.app/api/digimon'

  constructor(private http: HttpClient) { }

  cargarComunas(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}
