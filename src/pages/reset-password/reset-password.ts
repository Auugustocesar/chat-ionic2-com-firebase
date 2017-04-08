import {
  NavController,
  LoadingController,
  AlertController
} from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthData } from "../../providers/auth-data";
import { EmailValidator } from "../../validators/email";

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {
  public resetPasswordForm;

  constructor(
    public navCtrl: NavController,
    public authData: AuthData,
    public formBuilder: FormBuilder,
    public loadingCtrol: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
    })
  }

  resetPassword() {
    if (!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
    } else {
      this.authData.recuperarSenha(this.resetPasswordForm.value.email).then((user) => {
        let alert = this.alertCtrl.create({
          message: "Link enviado para o email",
          buttons: [{
            text: "Ok",
            role: 'cancel',
            handler: () => {
              this.navCtrl.pop();
            }
          }]
        });
        alert.present();
      }, (error) => {
        var errorMessage: string = error.message;
        let errorAlert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [{
            text: "Ok",
            role: 'cancel'
          }]
        });
        errorAlert.present();
      });
    }
  }


}
