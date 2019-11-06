import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
import { PersonaComponent } from './components/persona/persona.component';
import { EditComponent } from './components/edit/edit.component';



const APP_ROUTES: Routes = [
    { path: 'listado', component: ListadoComponent },
    { path: 'crear', component: CrearComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'persona/:id', component: PersonaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'listado' }
]; 

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});