import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { ILogin } from '../dataTypes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor (private user:UsersService , private router : Router){}
  handleLogin(data: ILogin): void {
    this.user.userLogin(data)
  }
  ngOnInit():void{
    this.user.reloadUser();
  }
}
