import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MusicCard } from '../interfaces/music-card';
import { AboutMusic } from '../interfaces/about-music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  apiUrl: string = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  getAllMusic(term: string = 'pink-floyd'): Observable<MusicCard[]> {
    return this.http
      .get<{ results: MusicCard[] }>(`${this.apiUrl}?term=${term}&media=music`)
      .pipe(map((response) => response.results)); 
  }

  getMusicById(id: string): Observable<AboutMusic> {
    return this.http
      .get<{ results: AboutMusic[] }>(`${this.apiUrl}?term=${id}`)
      .pipe(map((response) => response.results[0])); 
  }

}
