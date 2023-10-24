
import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UsersWithApiService } from 'src/app/services/users-with-api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent  {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersWithApiService:UsersWithApiService, private router:Router ) {

    this.registrationForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
   }
  

  

  user:Iuser = {} as Iuser;
  addUser(){

    this.usersWithApiService.signUpUser(this.user).subscribe({
      next:(user) =>{
        console.log(user);
        this.router.navigate(['/Home']);
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
  
  get fullName(){
    return this.registrationForm.get('fullName');
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get password(){
    return this.registrationForm.get('Password')
    }
  
}
