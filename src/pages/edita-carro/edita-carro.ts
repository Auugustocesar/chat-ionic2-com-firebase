import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFire } from 'angularfire2';
import { Carro } from "../lista-carro/lista-carro";

@Component({
  selector: 'page-edita-carro',
  templateUrl: 'edita-carro.html'
})
export class EditaCarroPage {
  ref: FirebaseObjectObservable<any>;
  id: string;
  carro: Carro;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public af: AngularFire) {
    this.id = this.navParams.get('id');
    this.ref = af.database.object('/carros/' + this.id);
    this.ref.subscribe(snapshot => {
      this.carro = snapshot;
    })
  }

  salvar() {
    this.ref.update(this.carro).then(() => {
      this.viewCtrl.dismiss();
    })
  }

  excluir(id) {
    this.ref.remove();
    this.viewCtrl.dismiss();
  }

  fechar() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaCarroPage');
  }

}
