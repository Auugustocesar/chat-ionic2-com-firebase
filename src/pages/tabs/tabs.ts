import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListaCarroPage } from '../lista-carro/lista-carro';
import { ContactPage } from '../contact/contact';
import { ChatPage } from '../chat/chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ChatPage;
  tab2Root: any = ListaCarroPage;
  tab3Root: any = ContactPage;
  tab4Root: any = HomePage;

  constructor() {

  }
}
