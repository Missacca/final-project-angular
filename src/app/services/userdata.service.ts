import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) {}

  url: string  = "http://frp-fit.com:56647";
  onLogin(email: string, password: string): Observable<any> {
    return this.http.post(this.url + '/api/login', { email, password });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  onRegister(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.url + '/api/register', { username, email, password });
  }


  logout(): void {
    localStorage.removeItem('token');
  }

  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(this.url+ '/api/user/info', {headers: { Authorization: `Bearer ${token}` }});
  }

  updateUserInfo(password: string) {
    const token = localStorage.getItem('token');
    const body = { password };
    return this.http.put(`${this.url}/api/user/changePassword`, body, {
      headers: { Authorization: `Bearer ${token}` }})
  }
  DeletePost(postId: any) {
    const token = localStorage.getItem('token');
    return this.http.delete(`${this.url}/api/user/posts/favourite/${postId}`,{headers: { Authorization: `Bearer ${token}` }});
  }
}
