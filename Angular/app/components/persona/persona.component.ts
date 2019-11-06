import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  private id: number;
  persona: Usuarios;

  constructor( private _ps: UsuariosService,
               private activatedRoute: ActivatedRoute  ) {

                // this.activatedRoute.params.subscribe( params =>{
                //           this.persona = this._ps.getUser( params['id'] );
                //           console.log(this.persona);
                //       });
                }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this._ps.getUser(this.id).subscribe(
        (persona) => this.persona = persona,
        (err: any) => console.log(err)
      );
    });
  }

}


// heroe:any = {};


//   constructor( private activatedRoute: ActivatedRoute,
//                private _heroesService: HeroesService
//     ){

//     this.activatedRoute.params.subscribe( params =>{
//         this.heroe = this._heroesService.getHeroe( params['id'] );
//         // console.log(this.heroe);
//     });

//   }