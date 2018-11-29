import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export default class ProyectoService {

  constructor(public db: AngularFirestore) { }

  obtenerProyectos(){
    return this.db.collection('/proyectos').snapshotChanges();
  }

  obtenerProyecto(value){
    return this.db.collection('/proyectos', ref=> {
      return ref.where('usuario','==',value.usuario).where('titulo','==',value.titulo)
    }).snapshotChanges();
  }

  crearProyecto(value,usuario) {
    return this.db.collection('proyectos').add({
      titulo: value.titulo,
      descripcion: value.descripcion,
      usuario: usuario,
      tipo: value.tipo,
      tags: value.tags,
      publicacion:new Date()
    });
  }
}
