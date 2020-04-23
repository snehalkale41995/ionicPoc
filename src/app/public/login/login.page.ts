import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import AppConfig from '../../../appConstants/appConfig.js'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {}
  constructor(private authService : AuthenticationService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }
   
  login(){
    console.log("user", this.user)
    let compRef = this ;
    if(this.user && this.user.email === AppConfig.userName && this.user.password === AppConfig.password){
    this.router.navigate(['members','dashboard'])
     this.authService.login();
    }
    else{
      this.presentAlert()
    }
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
