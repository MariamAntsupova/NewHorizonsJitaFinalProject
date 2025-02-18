import { Component, OnInit } from '@angular/core';
import { MusicCard } from '../../interfaces/music-card';
import { MusicService } from '../../services/music.service';
import { NgFor, NgIf } from '@angular/common';
import { MusicCardComponent } from '../music-card/music-card.component';
import { SearchMusicComponent } from '../search-music/search-music.component';


@Component({
  selector: 'app-musics-list',
  imports: [NgIf, NgFor, MusicCardComponent, SearchMusicComponent],
  templateUrl: './musics-list.component.html',
  styleUrl: './musics-list.component.css'
})
export class MusicsListComponent implements OnInit {
  musicList: MusicCard[] = [];
  loading: boolean = false;
  term: string = 'pink-floyd'; 
  limit: number = 20;
  noResults: boolean = false;

  constructor(private musicService: MusicService) {}

  fetchMusic(): void {
    this.loading = true;
    this.musicService.getAllMusic(this.term).subscribe((mdata) => {
      if (mdata.length === 0) {
        this.noResults = true;
        this.musicList = []; 
      } else {
        this.noResults = false; 
        this.musicList = mdata.slice(0, this.limit);
      }
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.fetchMusic();
  }

  showMore(): void {
    this.limit += 20;
    this.fetchMusic();
  }

  showLess(): void {
    if (this.limit > 20) {
      this.limit -= 20;
      this.fetchMusic();
    }
  }

  onSearch(query: string): void {
    if (query.trim() === '') {
      this.fetchMusic(); 
    } else {
      this.term = query;
      this.fetchMusic(); 
    }
  }
}
