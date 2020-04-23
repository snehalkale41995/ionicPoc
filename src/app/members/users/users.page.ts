import { Component, OnInit } from '@angular/core';
import {usersService} from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  providers : [usersService]
})
export class UsersPage implements OnInit {
   
   products : [];
  
  constructor(private _usersService : usersService) { }

  ngOnInit() {
     this.getData();
    }

    async getData() {
      await this._usersService.getProducts()
        .subscribe(res => {
          console.log(res);
         this.products = res;
        }, err => {
          console.log(err);
         
        });
    }

  }