import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Iuser } from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isLogBehavior:BehaviorSubject<boolean>;
  userData:Iuser={} as Iuser;
  constructor() {
    this.isLogBehavior=new BehaviorSubject<boolean>(this.isUserLoggedIn);
  }
  login(data:any){
    // let Token= "this-is-my-token";
    localStorage.setItem("token", data.password);
    this.isLogBehavior.next(true);
  }
  logout(){
    localStorage.removeItem("token");
    this.isLogBehavior.next(false);

  }
  get isUserLoggedIn(): boolean {
    return (localStorage.getItem('token'))?true:false;
  }
  getUserStatus():Observable<boolean> {
    return this.isLogBehavior.asObservable();
  }}
