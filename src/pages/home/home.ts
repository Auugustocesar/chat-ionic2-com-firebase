import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from "../profile/profile";
import { ChatPage } from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  goToProfile() { this.navCtrl.push(ProfilePage); }

  goToChat() { this.navCtrl.push(ChatPage); }

}
