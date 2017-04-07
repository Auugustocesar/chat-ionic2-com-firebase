import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { EditaCarroPage } from "../edita-carro/edita-carro";

export class Carro {
  id: string;
  dono: string;
  modelo: string;
  multa: boolean;
}

@Component({
  selector: 'page-lista-carro',
  templateUrl: 'lista-carro.html'
})
export class ListaCarroPage {
  lista: FirebaseListObservable<any>;
  carro: Carro;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public af: AngularFire,
    public modal: ModalController) {
    this.lista = this.af.database.list('/carros');
    this.carro = new Carro();
  }

  cadastrar() {
    this.lista.push(this.carro).then(() => {
      this.carro = new Carro();
    })
  }

  editar(id) {
    this.modal.create(EditaCarroPage, { id: id }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCarroPage');
  }

}
