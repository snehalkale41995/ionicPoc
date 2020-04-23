import { Component, OnInit } from '@angular/core';
import {usersService} from '../../services/users.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  user : {};
  isLoaded = false ;
  constructor(private _userService: usersService, private route : ActivatedRoute, public loadingController: LoadingController,
              private router : Router) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')){
      this.getUserDetails();
    }
  }

  async getUserDetails() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
   
    await loading.present();
    let id = this.route.snapshot.paramMap.get('id');
    await this._userService.getUsers()
      .subscribe(res => {
        console.log(res);
        res.forEach(element => {
          if(element.id === id ){
            this.user = element ;
          }
        });
        loading.dismiss();
        this.isLoaded = true;
         console.log("this.user", this.user)
      }, err => {
        console.log(err);
        loading.dismiss();
        this.isLoaded = true;
      });
  }


  async updateUser(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
   
    await loading.present();
    await this._userService.updateUser(this.user)
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
