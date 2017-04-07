import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from "angularfire2";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatPage } from "../pages/chat/chat";
import { ListaCarroPage } from '../pages/lista-carro/lista-carro';
import { EditaCarroPage } from "../pages/edita-carro/edita-carro";

export const firebaseConfig = {
    apiKey: "AIzaSyCJGyF5DBnJxwNqSnHm2_3lq2h9sCFHS1U",
    authDomain: "chat-ionic-c0185.firebaseapp.com",
    databaseURL: "https://chat-ionic-c0185.firebaseio.com",
    storageBucket: "chat-ionic-c0185.appspot.com",
    messagingSenderId: "1036057523817"
}

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ChatPage,
    ListaCarroPage,
    EditaCarroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ChatPage,
    ListaCarroPage,
    EditaCarroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
