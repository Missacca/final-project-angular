import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url: string  = "http://frp-fit.com:56647";
  constructor(private http: HttpClient,) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  //在page4页面 创造一个post请求，从html中获取到content，然后根据token中的信息来收取
  createPost(content: string) {
    const token = localStorage.getItem('token');
    return this.http.post(this.url + '/api/posts', { content }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  //在page4页面 获取所有的评论
  getPosts() {
    return this.http.get(this.url + '/api/posts');
  }

  likePost(postId: string) {
    return this.http.post(this.url + `/api/posts/${postId}/like`, {}, { headers: this.getHeaders(), responseType: 'text' as 'json'});
  }

  favoritePost(postId: string) {
    return this.http.post(this.url + `/api/posts/${postId}/favourite`, {}, { headers: this.getHeaders(),responseType: 'text' as 'json' });
  }


  //在page-commit中 发
  addComment(content: string, postId: string) {
    const token = localStorage.getItem('token');
    return this.http.post(this.url + '/api/comments', { content, postId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  //获得postId的帖子下的全部评论
  getComments(postId: string) {
    return this.http.get(this.url + `/api/comments/${postId}`);
  }

  //postId
  likeComment(commentId: string) {
    return this.http.post(this.url + `/api/comments/${commentId}/like`, {}, { headers: this.getHeaders(), responseType: 'text' as 'json'});
  }
  //记录下来用
  favoriteComment(commentId: string) {
    return this.http.post(this.url + `/api/comments/${commentId}/favorite`, {}, { headers: this.getHeaders(), responseType: 'text' as 'json'});
  }
  //
  Alllikenumber(postId: string){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(this.url + `/api/posts/${postId}/like`, { headers: { Authorization: `Bearer ${token}` } });
  }

  getAllPosts() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.url+`/api/user/posts`, { headers });
  }
  getAllFavorites() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.url+`/api/user/posts/favourite`, { headers });
  }

  isPostLiked(postId: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(this.url+`/api/posts/${postId}/liked`,  { headers: { Authorization: `Bearer ${token}` }})
  }

  isPostFavor(postId: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.url}/api/posts/${postId}/favourite`, { headers: { Authorization: `Bearer ${token}` }})
  }
}
