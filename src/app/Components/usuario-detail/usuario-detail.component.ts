import { Component, OnInit,Input } from '@angular/core';

import { usuarioENT } from '../../entities/usuarioENT';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  @Input() usuario: usuarioENT; 
  constructor() { }

  ngOnInit() {
  }

}
