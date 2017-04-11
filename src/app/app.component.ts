import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from "../pages/home/home";

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  zone: NgZone;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    firebase.initializeApp({
      apiKey: "AIzaSyCJGyF5DBnJxwNqSnHm2_3lq2h9sCFHS1U",
      authDomain: "chat-ionic-c0185.firebaseapp.com",
      databaseURL: "https://chat-ionic-c0185.firebaseio.com",
      storageBucket: "chat-ionic-c0185.appspot.com",
      messagingSenderId: "1036057523817"
    });
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe;
        } else {
          this.rootPage = HomePage;
          unsubscribe;
        }
      })
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
