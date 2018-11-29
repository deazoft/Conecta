import { Component, OnInit } from '@angular/core';
import ProyectoService from '../../services/proyecto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import DataSharingService from '../../services/data-sharing.service';
import { proyectoModel } from '../../entities/proyecto.model';
import { Router } from "@angular/router";
@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {

  creaProForm: FormGroup;
  errorMessage: String = '';
  successMessage:String='';
  proyecto: proyectoModel;
  submitted = false;
  tiposProyectos = [
    { name: 'Desarrrollo de Software', codigo: 'DES' },
    { name: 'Diseño Aplicaciones', codigo: 'DA' },
    { name: 'Páginas Web', codigo: 'PW' },
    { name: 'Multimedia', codigo: 'MD' }
  ];
  constructor(private proyectServ: ProyectoService,
    private fb: FormBuilder,
    public dataSharingService: DataSharingService,
    private router: Router) { this.createForm() }

  ngOnInit() {
  }

  get f() { return this.creaProForm.controls; }

  createForm() {
    console.log('Crear FOrm');
    this.creaProForm = this.fb.group({
      titulo: ['', Validators.required],
      tipo: ['', Validators.required],
      tags: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  crearProyecto(value) {
    this.submitted = true;
    if (this.creaProForm.invalid) {
      this.errorMessage = 'Error en el formulario';
    } else {

      this.proyectServ.crearProyecto(value, this.dataSharingService.usuario)
        .then(()=>{
          this.successMessage='El proyecto ha sido creado';
          this.creaProForm.reset()
          this.router.navigate(['/trabajos']);
        })
        .catch(function (error) {
          this.errorMessage= error;
        });

    }


  }

}


