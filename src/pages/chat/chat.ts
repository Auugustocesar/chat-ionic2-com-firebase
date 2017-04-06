import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {
  lista: FirebaseListObservable<any>;
  mensagem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.lista = af.database.list('/chat');
  }

  enviar() {
    let m = {
      texto: this.mensagem,
      data: new Date().toISOString()
    };
    console.log(m)
    this.lista.push(m).then(() => {
      this.mensagem = "";
    })
  }

  eventEnter(event) {
    if (event === 13) {
      this.enviar()
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
