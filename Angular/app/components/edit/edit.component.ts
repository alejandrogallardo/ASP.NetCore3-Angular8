import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona: Usuarios = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    bio: ''
  };

  constructor( private _ps: UsuariosService,
               private aR: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    const parametros = this.aR.snapshot.params;
    console.log( parametros );
    if ( parametros.id ){
      this._ps.getUser(parametros.id)
        .subscribe( 
          res =>{ 
            console.log( res );
            this.persona = res; 
          },
          err => { console.log( err ); }
        )
    }
  }

  edit(){
    // console.log( this.persona );
    this._ps.updateUser(this.persona.id, this.persona)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/listado']);
        },
        err => console.error(err)
      );
  }

  // resetForm( forma?: NgForm ){
  //   if (forma != null )
  //   forma.resetForm();
  //   this._ps.formData = {
  //     id: 0,
  //     nombre: '',
  //     apellido: '',
  //     correo: '',
  //     bio: ''
  //   }
  // }

  // onSubmit( forma: NgForm ){
  //   console.log( forma.value );
  //   this._ps.crearPersona( forma.value )
  //     .subscribe( res => {
  //       console.log( res );
  //       this.resetForm( forma )
  //     },
  //     err => {
  //       console.log( err );
  //     })
  // }
}
