import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component'
import { LoginComponent } from './Components/login/login.component'
import { DashboardComponent }   from './Components/dashboard/dashboard.component';
import { TrabajosComponent } from './Components/trabajos/trabajos.component';
import { PostularProyectoComponent } from './Components/postular-proyecto/postular-proyecto.component';
import { CrearProyectoComponent } from './Components/crear-proyecto/crear-proyecto.component';
import {UsuarioDetailComponent} from './Components/usuario-detail/usuario-detail.component';
import { HallFamaComponent } from './Components/hall-fama/hall-fama.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'PostuPro', component: PostularProyectoComponent,data:{} },
  { path: 'crearPro', component: CrearProyectoComponent },
  { path: 'perfil', component: UsuarioDetailComponent },
  { path: 'hall', component: HallFamaComponent },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
