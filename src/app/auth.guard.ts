import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsersService } from './services/users.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const user = inject(UsersService);
  if(localStorage.getItem('user')){
    return true;
  }
  return user.isLoggedIn;
};
