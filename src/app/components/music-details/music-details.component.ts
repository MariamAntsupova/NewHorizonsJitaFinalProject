import { Component, OnInit } from '@angular/core';
import { AboutMusic } from '../../interfaces/about-music';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../../services/music.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-music-details',
  imports: [NgIf],
  templateUrl: './music-details.component.html',
  styleUrl: './music-details.component.css'
})
export class MusicDetailsComponent implements OnInit {
  musicDetail!: AboutMusic;

  constructor(private route:ActivatedRoute , private musicService:MusicService){}

  ngOnInit(): void{
    const trackId = this.route.snapshot.paramMap.get('id');
    if (trackId) {
      this.musicService.getMusicById(trackId).subscribe({
        next: (data) => {
          this.musicDetail = data;
        },
        error: (error) => {
          console.error('Error fetching music details:', error);
        }
      });
    }
  }
}
