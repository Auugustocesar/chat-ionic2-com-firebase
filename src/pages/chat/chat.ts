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
    this.lista = af.database.list('https://chat-ionic-c0185.firebaseio.com/chat');
  }

  enviar(){
    let m = {
      texto: this.mensagem,
      data: new Date()
    };
    this.lista.push(m).then(() => {
      this.mensagem = "";
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
