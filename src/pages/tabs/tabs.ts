import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListaCarroPage } from '../lista-carro/lista-carro';
import { ContactPage } from '../contact/contact';
import { ChatPage } from '../chat/chat';
import { AuthData } from "../../providers/auth-data";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  providers: [AuthData]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ChatPage;
  tab2Root: any = ListaCarroPage;
  tab3Root: any = ContactPage;
  tab4Root: any = HomePage;

  constructor(public navCtrl: NavController) {

  }
}
