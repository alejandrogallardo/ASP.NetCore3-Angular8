import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {



  usuarios: any = [];

  personas: Usuarios;
  
  constructor( private _ps: UsuariosService,
               private router: Router ) {
             
                }

  ngOnInit() {
  this.getUsers();
  }

  /**
   * Obtiene El listado de susuarios
   */
  getUsers(){
    this._ps.getUsers()
    .subscribe(
      // res => console.log(res),
      res => {
        this.usuarios = res;
        console.log(res);
      },
      err => console.error(err)
    );
    console.log('Vamos bien 🍺');
  }

  /**
   * Obtiene un Usuario con el ID
   * @param id 
   */
  verUno( id: string ){
    console.log('vamos bien');
    console.log( id );
    // this.router.navigate( ['/persona/', id ] );
  }

  /**
   * Elimina un Usuario
   * @param id 
   */
  deleteUno(id){
    this._ps.deleteUser(id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsers();
        },
        err => console.error(err)
      );
  }

  // populateForm( item: Usuarios ) {
  //   console.log( item );
  //   console.log( this._ps.formData = item );
  // }

}
