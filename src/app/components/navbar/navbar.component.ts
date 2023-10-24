import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UsersWithApiService } from 'src/app/services/users-with-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userLog:boolean=false;
  isUserLogged:boolean;
  constructor( private userAuthService: UserAuthService,private router: Router){
  this.isUserLogged=this.userAuthService.isUserLoggedIn;

  }
  ngOnInit(): void {

    this.userAuthService.getUserStatus().subscribe({
      next:(user) => {
        this.isUserLogged=user;
        console.log(this.isUserLogged);


      },
      error:(error) => {
        console.log(error);

      }

    });

  }
  userLogout(){
    this.userAuthService.logout();
    this.userLog=this.userAuthService.isUserLoggedIn;
    this.router.navigate(['/Login']);

  }
}
