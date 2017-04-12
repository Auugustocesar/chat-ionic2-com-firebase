import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class AuthData {

  constructor() {}

  logar(email: string, senha: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, senha);
  }

  cadastrar(email: string, senha: string): firebase.Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((novoUsuario) => {
        firebase.database().ref('/userProfile').child(novoUsuario.uid).set({ 
          email: email })
      })
  }
  recuperarSenha(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logout(): firebase.Promise<any> {
    return firebase.auth().signOut();
  }

}
