import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiUrl = 'https://api.hf2e2bc54.nyat.app:56647/api/chat';
  token = localStorage.getItem('token');
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };

  getResponseFromLM(prompt: string): Observable<any> {
    if (!prompt.trim()) {
      throw new Error('Prompt cannot be empty');
    }
    const body = {
      model: "gpt-4o",
      messages: [
        { "role": "user", content: prompt+"You can only answer the questions relative to music or guitar. And you answer should under 500 words." }
      ],
      //temperature: 0.7,
      max_tokens: 500,
      stream: false
    };


    return this.http.post<any>(this.apiUrl, body , this.httpOptions);
  }
}
