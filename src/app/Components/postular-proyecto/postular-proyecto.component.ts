import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DataSharingService from '../../services/data-sharing.service';
import ProyectoService from '../../services/proyecto.service';
import {proyectoModel} from '../../entities/proyecto.model';

@Component({
  selector: 'app-postular-proyecto',
  templateUrl: './postular-proyecto.component.html',
  styleUrls: ['./postular-proyecto.component.css']
})
export class PostularProyectoComponent implements OnInit{

  constructor(private route: ActivatedRoute, public dataSharingService: DataSharingService,
    private proyectServ: ProyectoService) { }
  sub: any;
  proyecto;
  descripcion;

  ngOnInit() {
    this.sub = this.dataSharingService.proyectoActivo;
    /*this.proyectServ.obtenerProyecto(this.sub).subscribe(result => {
      this.proyecto = result;
      console.log(this.proyecto.payload.doc);
    });*/
    this.proyectServ.obtenerProyecto(this.sub).subscribe(result=>{
      this.proyecto = result[0].payload.doc.id;
      console.log(this.proyecto);
    })
    
  }



}
