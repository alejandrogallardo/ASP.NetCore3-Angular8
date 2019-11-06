import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

	API_URI = 'https://localhost:44346/api';

  constructor( private http: HttpClient ) { }

  // Obtiene todos los usuarios
  getUsers(){
    return this.http.get( `${this.API_URI}/Personas` );
  }

  // Obtiene un usuario por Id
  getUser(id){
    return this.http.get( `${this.API_URI}/Personas/${id}` );
  }

  // Crea nuevos usuarios
  crearPersona( persona: Usuarios ){
    return this.http.post( `${this.API_URI}/Personas`, persona );
  }

  // Edita usuarios
  //string|number valida si el dato que se recive es de tipo string o number
  updateUser(id: string|number, updatedUser: Usuarios): Observable<Usuarios> {
    return this.http.put(`${this.API_URI}/Personas/${id}`, updatedUser);
  }

  // Borra Usuarios
  deleteUser(id) {
    return this.http.delete(`${this.API_URI}/Personas/${id}`);
  }

}
