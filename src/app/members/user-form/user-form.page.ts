import { Component, OnInit } from '@angular/core';
import {usersService} from '../../services/users.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {
  user = {}
  constructor(private _userService : usersService, private router : Router) { }

  ngOnInit() {
    
  }

  async addUser(){
    await this._userService.postUser(this.user)
    .subscribe(res => {
       console.log("res", res)
       this.router.navigate(['members','dashboard'])   
         }, (err) => {
        console.log(err);
      });
      console.log(this.user)
   }
}
