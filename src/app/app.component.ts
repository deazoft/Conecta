import { Component, OnInit } from '@angular/core';

/**
 * Componente Inicial, la documentación se genera utilizando el comando npm run compodoc.
 *
 * Para visualizar utilizar el comando nws en la carpeta documentation creada con el comando anterior. 
 * 
 * Para desplegar la aplicación utilizar el comando ng build para compilar y firebird deploy para publicar. 
  */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

}
