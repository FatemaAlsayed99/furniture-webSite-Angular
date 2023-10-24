import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const userGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserAuthService)
  const router = inject(Router)
  if(userService.isUserLoggedIn){
    return true
  }else{
    alert('please login first')
    router.navigate(['/Login'])
    return false
  }

};
