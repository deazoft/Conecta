import { Component, OnInit } from '@angular/core';
import { usuarioENT} from './entities/usuarioENT'; 

/**
 * Componente Inicial, la documentación se genera utilizando el comando npm run compodoc.
 *
 * Para visualizar utilizar el comando nws en la carpeta documentation creada con el comando anterior. 
  */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Conecta'
  usuario: usuarioENT = {
    id: 1,
    name: 'Windstorm'
  };
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
