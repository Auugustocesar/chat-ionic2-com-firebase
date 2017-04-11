import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private rootPage;
  private homePage;
  private chatPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.homePage = HomePage;
    this.chatPage = ChatPage;
  }

  openPage(page){
    this.rootPage = page;
  }

}
