import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiUrl = 'http://192.168.31.199:1234/v1/chat/completions';
  constructor(private http: HttpClient) {}

  getResponseFromLM(prompt: string): Observable<any> {
    const body = {
      model: "gemma-3-1b-it",
      messages: [
        { "role": "system", "content": "You are an AI assistant, please answer all questions in English" },
        { "role": "user", "content": prompt }
      ],
      temperature: 0.7,
      max_tokens: -1,
      stream: false
    };

    return this.http.post<any>(this.apiUrl, body);
  }
}
