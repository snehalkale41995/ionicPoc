import { Component, OnInit } from '@angular/core';
import {usersService} from '../../services/users.service';
import {Product} from '../../services/product'
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  providers : [usersService]
})
export class UsersPage implements OnInit {
   
   products : any;
  
  constructor(private _usersService : usersService) { }

  ngOnInit() {
     this.getData();
    }

    async getData() {
     
      await this._usersService.getProducts()
        .subscribe(res => {
          this.products = res;
          console.log(this.products);
         
        }, err => {
          console.log(err);
         
        });
    }

  }