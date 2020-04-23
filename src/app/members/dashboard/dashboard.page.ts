import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authService: AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  logout(){
  this.authService.logout()
  }

  routeAdd(){
    this.router.navigate(['members']['users'])
  }
}
