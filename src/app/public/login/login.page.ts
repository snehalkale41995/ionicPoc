import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {}
  constructor(private authService : AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
   
  login(user){
    console.log("user", this.user)
    user =  this.user
    if(user && user.email ==="admin@gmail.com" && user.password ==="admin"){
      this.authService.login();
      this.router.navigate(['members','dashboard'])
    }
    else{
      
    }
    
  }
}
