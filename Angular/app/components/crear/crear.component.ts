import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  persona: Usuarios = {
    // id: '',
    nombre: '',
    apellido: '',
    correo: '',
    bio: ''
  };

  constructor( private _ps: UsuariosService,
               private router: Router ) { }

  ngOnInit() {
  }

  guardar( forma: NgForm ){
    console.log(forma.value);
    console.log(this.persona);
    // Se llama al servicio, al metodor y al modelo
    // para redireccionar luego de gaurdar se importa el router
    this._ps.crearPersona( forma.value )
      .subscribe(
        res => {
          console.log(res);
          // Redireccion al momento de guardar
          this.router.navigate(['/listado']);
        },
        err => console.error(err)
      );
  }

}
