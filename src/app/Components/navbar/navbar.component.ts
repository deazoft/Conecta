import { Component, OnInit } from '@angular/core';
import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import { Router } from "@angular/router";
import { FirebaseUserModel } from '../../entities/user.model';
import DataSharingService from '../../services/data-sharing.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService, public authService :AuthService
    ,private router: Router, public dataSharingService: DataSharingService) { 
      
    
    }

  user: FirebaseUserModel;
  

  ngOnInit() {
    this.user = new FirebaseUserModel();
    this.userService.getCurrentUser()
      .then(res => {
        this.user.name = res.email;
        this.dataSharingService.usuario = res.email;
        this.dataSharingService.isRegister = false;
      }, err => {
        this.dataSharingService.isRegister=true;
        
      });
  }

  doLogut(){
    this.authService.doLogout();
    this.dataSharingService.isRegister=true;
    this.router.navigate(['']);
  }

}
