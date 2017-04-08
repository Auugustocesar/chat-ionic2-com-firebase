import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

@Injectable()
export class AuthData {

  public fireAuth: any;
  public userProfile: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');
  }

  logar(email: string, senha: string): firebase.Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, senha);
  }

  cadastrar(email: string, senha: string): firebase.Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(email, senha)
      .then((novoUsuario) => {
        this.userProfile.child(novoUsuario.uid).set({ email: email })
      })
  }
  recuperarSenha(email: string): firebase.Promise<any> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  logout(): firebase.Promise<any> {
    return this.fireAuth.signOut();
  }

}
