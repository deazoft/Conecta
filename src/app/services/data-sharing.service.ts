import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class DataSharingService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public usuario:BehaviorSubject<String>= new BehaviorSubject<String>("");
  
  public isRegister;
  public proyectoActivo;

  constructor() { }
}
