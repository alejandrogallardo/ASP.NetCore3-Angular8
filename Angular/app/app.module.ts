import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Routes
import { APP_ROUTING } from './app.routes';

// Servcios
import { UsuariosService } from './services/usuarios.service';

// Modulos
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './components/listado/listado.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CrearComponent } from './components/crear/crear.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    NavbarComponent,
    CrearComponent,
    PersonaComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
  	UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
