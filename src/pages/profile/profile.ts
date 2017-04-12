import { NavController, AlertController } from "ionic-angular";
import { Component } from '@angular/core';
import { ProfileData } from "../../providers/profile-data";
import { AuthData } from "../../providers/auth-data";
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public userProfile: any;
  public birthData: string;

  constructor(public navCtrl: NavController,
    public profileData: ProfileData,
    public authData: AuthData,
    public alertCtrl: AlertController) {

  }


  ionViewDidEnter() {
    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
      this.birthData = this.userProfile.birthData;
    });
  }


  logOut() {
    this.authData.logout().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

  updateName() {
    let alert = this.alertCtrl.create({
      message: "Seu Primeiro e ultimo nome",
      inputs: [
        {
          name: 'firstName',
          placeholder: 'seu primeiro nome',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'ultimo nome',
          value: this.userProfile.lastName
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthData){
    this.profileData.updateDOB(birthData);
  }

    updateEmail(){
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newEmail',
          placeholder: 'Your new email',
        },
        {
          name: 'password',
          placeholder: 'Your password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updateEmail(data.newEmail, data.password);
          }
        }
      ]
    });
    alert.present();
  }

updatePassword(){
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Your new password',
          type: 'password'
        },
        {
          name: 'oldPassword',
          placeholder: 'Your old password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.profileData.updatePassword(data.newPassword, data.oldPassword);
          }
        }
      ]
    });
    alert.present();
  }

}
