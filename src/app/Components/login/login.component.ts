import { Component, OnInit } from '@angular/core';
import AuthService from "../../services/auth.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import DataSharingService from '../../services/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    public dataSharingService: DataSharingService
  ) {
    this.createForm();
  }
  ngOnInit(){

  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['']);
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.dataSharingService.isRegister=false;
      this.router.navigate(['']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

}
