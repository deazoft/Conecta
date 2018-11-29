import { Component, OnInit } from '@angular/core';
import ProyectoService from '../../services/proyecto.service';
import {proyectoModel} from '../../entities/proyecto.model';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  proyectos: Array<any>;
 

  constructor(private proyectServ: ProyectoService) { }

  ngOnInit() {
    this.proyectServ.obtenerProyectos().subscribe(result=>{
      this.proyectos = result.filter( (proyecto) => {
        let mproyecto  = proyecto.payload.doc.data() as proyectoModel
        return mproyecto.usuario.indexOf('deazoft@gmail.com')==-1;
      });
    })
  }

}
