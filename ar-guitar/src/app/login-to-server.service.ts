import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoginToServerService {
  constructor(private http: HttpClient) {}
  onLogin(email:string,password:string) {
    return this.http.post('/api/auth/login', { email, password })
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);
      },
        (error: any) => {
        console.error('登录失败');
        alert('登录失败，请检查邮箱和密码');});
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
