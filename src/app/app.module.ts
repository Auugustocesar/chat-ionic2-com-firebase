import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { ResetPasswordPage } from "../pages/reset-password/reset-password";
import { SignupPage } from "../pages/signup/signup";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatPage } from "../pages/chat/chat";
import { ListaCarroPage } from '../pages/lista-carro/lista-carro';
import { EditaCarroPage } from "../pages/edita-carro/edita-carro";
import { AuthData } from '../providers/auth-data'



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatPage,
    ListaCarroPage,
    EditaCarroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatPage,
    ListaCarroPage,
    EditaCarroPage
  ],
  providers: [
    StatusBar,
    AuthData,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
