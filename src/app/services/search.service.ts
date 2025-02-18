import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicCard } from '../interfaces/music-card';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://itunes.apple.com/search?term=';

  constructor(private http:HttpClient) { }

  searchMusic(query:string): Observable<MusicCard[]>{
    return this.http.get<MusicCard[]>(`${this.apiUrl}&media=music&limit=20`);
  }
}
