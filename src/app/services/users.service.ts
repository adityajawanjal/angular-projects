import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../dataTypes';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  userLogin(data: ILogin) {
    return this.http
      .post(`http://localhost:3000/users`, data, { observe: 'response' })
      .subscribe((res) => {
        this.isLoggedIn.next(true);
        localStorage.setItem('user', JSON.stringify(res.body));
        this.router.navigate(['/admin']);
      });
  }

  reloadUser() {
    if (localStorage.getItem('user')) {
      this.isLoggedIn.next(true);
      this.router.navigate(['admin']);
    }
  }
}
