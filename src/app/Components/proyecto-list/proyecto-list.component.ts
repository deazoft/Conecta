import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import DataSharingService from '../../services/data-sharing.service';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css']
})
export class ProyectoListComponent implements OnInit {


  constructor(private router: Router, public dataSharingService: DataSharingService) { }

  @Input() proyecto;

  ngOnInit() {

  }

  enviarDatos() {
    this.dataSharingService.proyectoActivo = this.proyecto;
    this.router.navigate(['PostuPro', this.proyecto]);
  }

}
