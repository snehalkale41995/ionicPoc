import { Component, OnInit } from '@angular/core';
import {usersService} from '../../services/users.service';
import {Router, ActivatedRoute} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {
  user = {};
  isLoaded = false ;
  constructor(private _userService : usersService, private router : Router,private route : ActivatedRoute, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async addUser(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
   
    await loading.present();
    await this._userService.postUser(this.user)
    .subscribe(res => {
       console.log("res", res)
       this.router.navigate(['members','dashboard'])   
       loading.dismiss();
         }, (err) => {
        console.log(err);
        loading.dismiss();
      });
      console.log(this.user)
   }
}


