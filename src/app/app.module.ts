import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from 'angularfire2';

//Import Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { ProfilePage } from "../pages/profile/profile";
import { ResetPasswordPage } from "../pages/reset-password/reset-password";
import { SignupPage } from "../pages/signup/signup";

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage } from "../pages/chat/chat";
import { ListaCarroPage } from '../pages/lista-carro/lista-carro';
import { EditaCarroPage } from "../pages/edita-carro/edita-carro";


//Import Providers
import { GetProviders } from "./app.providers";

export const firebaseConfig = {
  apiKey: "AIzaSyCJGyF5DBnJxwNqSnHm2_3lq2h9sCFHS1U",
  authDomain: "chat-ionic-c0185.firebaseapp.com",
  databaseURL: "https://chat-ionic-c0185.firebaseio.com",
  storageBucket: "chat-ionic-c0185.appspot.com",
  messagingSenderId: "1036057523817"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    ContactPage,
    TabsPage,
    ChatPage,
    ListaCarroPage,
    EditaCarroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    ContactPage,
    TabsPage,
    ChatPage,
    ListaCarroPage,
    EditaCarroPage
  ],
  providers: GetProviders()
})
export class AppModule { }
