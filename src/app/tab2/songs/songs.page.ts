import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
  standalone: false
})
export class SongsPage implements OnInit {
  loading: boolean = true;
  error: string | null = null;

  title: string = '';
  artist: string = '';
  songData: any[] = [];

  token: string = ''; // 用户登录后保存的 token
  songId: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id') || '';
    this.token = localStorage.getItem('token') || '';

    if (!this.songId) {
      this.error = '歌曲ID无效';
      this.loading = false;
      return;
    }

    this.fetchSong();
  }

  fetchSong() {
    this.loading = true;
    this.error = null;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    this.http.get<any>(`https://api.hf2e2bc54.nyat.app:56647/api/songs/${this.songId}`, { headers }).subscribe({
      next: (res) => {
        if (Array.isArray(res) && res.length > 0) {
          const song = res[0];
          this.title = song.title || '未命名';
          this.artist = song.artist || '未知艺术家';
          console.log(song);
          try {
            this.songData = song.lyrics;
          } catch (e) {
            this.error = '歌词数据解析失败';
            this.songData = [];
          }
        } else {
          this.error = '未找到歌曲';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('加载失败', err);
        this.error = '加载失败，请稍后重试';
        this.loading = false;
      }
    });
  }

}
