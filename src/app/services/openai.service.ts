import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiUrl = 'http://127.0.0.1:1234/v1/chat/completions';
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getResponseFromLM(prompt: string): Observable<any> {
    if (!prompt.trim()) {
      throw new Error('Prompt cannot be empty');
    }

    const body = {
      model: "gemma-3-12b-it-Q4_K_M",
      messages: [
        { "role": "user", "content": "You are an AI assistant, please answer all questions in English，and you can only answer the questions relative to music or guitar" },
        { "role": "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: -1,
      stream: false
    };

    return this.http.post<any>(this.apiUrl, body, this.httpOptions);
  }
}
