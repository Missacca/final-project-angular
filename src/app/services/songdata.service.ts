import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Song } from "../tab2/song";

@Injectable({
  providedIn: 'root'
})
export class SongdataService {

  constructor(private http: HttpClient) { }

  url: string  = "https://api.hf2e2bc54.nyat.app:56647/api/songs";

  getAllSongs():Observable<Song[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Song[]>(this.url, { headers });
  }

}
