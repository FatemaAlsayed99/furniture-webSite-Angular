import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UsersWithApiService } from 'src/app/services/users-with-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{
  // logInForm: FormGroup;

  allUsers:Iuser[] = [];
  allUser?:Iuser
  userLog: boolean = false;
  // errorMessage: string | undefined;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private usersWithApiService: UsersWithApiService
  ) {}

   userLoginData: Iuser = {} as Iuser;

  ngOnInit(): void {
    this.userLog = this.userAuthService.isUserLoggedIn;
    this.usersWithApiService.getAllUsers().subscribe(data=>{
      this.allUsers=data;
    })
    this.userAuthService.getUserStatus().subscribe({
      next:(user)=>{
        this.userLog=user;
      }
    })
  }

  userLogin(userLogin:any) {
    let logData={
     email : userLogin.email,
      password : userLogin.password
    }
    this.allUser= this.allUsers.find(user => user.password==userLogin.password&&user.email==userLogin.email)
      if(logData.password!=undefined&&logData.email!=undefined){
        if(userLogin.password==this.allUser?.password&&userLogin.email==this.allUser?.email){
          this.userAuthService.login(logData)
          this.router.navigate(['/Home']);
          console.log(logData.password)
        }else{
          alert("Invalid password or email")
        }
      }else{
        alert("please,enter your password or email")
      }
}
}