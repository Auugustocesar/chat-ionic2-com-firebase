import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

'https://github.com/angular/angularfire2/blob/master/docs/Auth-with-Ionic2.md'

export class ChatPage {
  lista: FirebaseListObservable<any>;
  mensagem: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public af: AngularFire,
    public toastCtrl: ToastController) {
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

  excluir(id) {
    this.lista.remove(id).then(() => {
      this.showToast()
    });
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Excluido com Sucesso!',
      duration: 30000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
