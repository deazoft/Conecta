import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UsuarioDetailComponent } from './Components/usuario-detail/usuario-detail.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { TrabajosComponent } from './Components/trabajos/trabajos.component';
import { PostularProyectoComponent } from './Components/postular-proyecto/postular-proyecto.component';
import { CrearProyectoComponent } from './Components/crear-proyecto/crear-proyecto.component';
import { ProyectoListComponent } from './Components/proyecto-list/proyecto-list.component';
import { HallFamaComponent } from './Components/hall-fama/hall-fama.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import AuthService from "./services/auth.service";
import UserService from './services/user.service';
import DataSharing from './services/data-sharing.service';
import ProyectoService from './services/proyecto.service';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsuarioDetailComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    TrabajosComponent,
    PostularProyectoComponent,
    CrearProyectoComponent,
    ProyectoListComponent,
    HallFamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],

  
  providers: [AuthService, UserService, DataSharing, ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
