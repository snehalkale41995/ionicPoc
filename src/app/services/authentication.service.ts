import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Storage} from '@ionic/storage'
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private storage : Storage, private plt : Platform) {
    this.plt.ready().then(()=>{
      this.checkToken()
    })
   }

   login(){
     return this.storage.set(TOKEN_KEY, 'Bearer_12345').then((res)=>{
      this.authenticationState.next(true)
     })
   }

   logout(){
    return this.storage.remove(TOKEN_KEY).then((res)=>{
      this.authenticationState.next(false)
     })
   }

   isAuthenticated () : boolean{
    return this.authenticationState.value;
   }

   checkToken(){
    return this.storage.get(TOKEN_KEY).then((res)=>{
      if(res){
        this.authenticationState.next(true)
      }
     
     })
   }
}
