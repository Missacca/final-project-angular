import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommitServiceService {
  constructor(private http: HttpClient,) {}
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  createPost(content: string) {
    const token = localStorage.getItem('token');
    return this.http.post('/api/posts', { content }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getPosts() {
    return this.http.get('/api/posts');
  }

  addComment(content: string, postId: string) {
    const token = localStorage.getItem('token');
    return this.http.post('/api/comments', { content, postId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getComments(postId: string) {
    return this.http.get(`/api/comments?postId=${postId}`);
  }

  likeComment(commentId: string) {
    return this.http.post(`/api/comments/${commentId}/like`, {}, { headers: this.getHeaders() });
  }

  favoriteComment(commentId: string) {
    return this.http.post(`/api/comments/${commentId}/favorite`, {}, { headers: this.getHeaders() });
  }
}
