import { Component, OnInit } from '@angular/core';
import {usersService} from '../../services/users.service';
import { LoadingController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  providers : [usersService]
})
export class UsersPage implements OnInit {
   
   users : [];

   constructor(private _usersService : usersService, public loadingController: LoadingController, private router : Router) {
   
   }
  

  ngOnInit() {
     this.getData();
    }

    async getData() {
      let  loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
      await this._usersService.getUsers()
        .subscribe(res => {
         this.users = res;
         loading.dismiss(); 
        }, err => {
          loading.dismiss(); 
        });
    }

    async deleteUser(useId){
      let  loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 2000
      });
     
      await loading.present();
      await this._usersService.deleteUser(useId)
      .subscribe(res => {
         this.router.navigate(['members','dashboard']) 
         loading.dismiss();  
           }, (err) => {
          loading.dismiss();
        });
     }

  }