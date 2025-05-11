import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LoginToServerService {

  constructor(private http: HttpClient) {}

  url: string  = "http://frp-aim.com:56647";
  onLogin(email:string,password:string) {
    return this.http.post(this.url + '/api/login', { email, password })
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        alert("login successfully, welcome to guitar world," + response.user.name);
      },
        (error: any) => {
        console.error('Login Failed');
        alert('Login Failed, Check your email and password');});
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  onRegister(username: string, email: string, password: string) {
    return this.http.post(this.url + '/api/register', { username, email, password })
      .subscribe((response: any)=>{
          alert("register successfully, welcome to guitar world," + username);
        },
        (error: any) => {
          console.error('Register Failed');
          alert('Register Failed');
        });
  }


  logout(): void {
    localStorage.removeItem('token');
  }
}
