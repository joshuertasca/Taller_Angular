import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  //con O mayusculas
import {Contacto} from 'src/app/models/contacto'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url = "http://localhost:4000/api/"   // la url de la api

  constructor( private http: HttpClient ) { }   // httpclient se encarga de alimentar el parametro

  getContactos (): Observable<any>{     // vaya al contedido vuelvalo asincrono y conviertaalo en un tipo any
    return this.http.get(this.url+"contactos")
  }

  deleteContacto (id:string) : Observable<any>  {
    return this.http.delete(this.url+"delete/"+id)
  }

  postContacto (contacto: Contacto):Observable<any>{
    return this.http.post(`${this.url}registro`, contacto)
  }

  getContacto(id:string): Observable<any> {
    return this.http.get(this.url +"contacto/"+ id)
  }

  putContacto(id:string , contacto: Contacto): Observable <any> {
    return this.http.put(this.url+"actualizar/"+id, contacto)
  }

}








