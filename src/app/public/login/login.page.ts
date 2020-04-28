import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import AppConfig from '../../../appConstants/appConfig.js';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
//import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {email : "", password : ""};
 // products: Product[] = [];
  constructor(private authService : AuthenticationService, private router: Router, public alertController: AlertController, private fb: Facebook) { }

  ngOnInit() {
  }
   
  login(){
    console.log("user", this.user)
    let compRef = this ;
    this.router.navigate(['members','dashboard'])
      this.authService.login();
    // if(this.user && this.user.email === AppConfig.userName && this.user.password === AppConfig.password){
    // this.router.navigate(['members','dashboard'])
    //  this.authService.login();
    // }
    // else{
    //   this.presentAlert()
    // }
  }

  loginFacebook(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed !',
     // subHeader: 'Subtitle',
      message: 'Username or Password is incorrect',
      buttons: ['OK']
    });

    await alert.present();
  }


}
