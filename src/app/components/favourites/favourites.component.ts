import { Component } from '@angular/core';
import { MusicCard } from '../../interfaces/music-card';
import { FavouritesService } from '../../services/favourites.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  imports: [NgIf,NgFor],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favourites: MusicCard[] = [];

  constructor(private favouritesService:FavouritesService, private router: Router,){}

  ngOnInit(): void{
    this.favourites = this.favouritesService.getFavorites();
  }
  goToDetails(trackId: string) {
    this.router.navigate([`/music-details/${trackId}`]);
  }
  removeFromFavorites(music: MusicCard): void {
    this.favouritesService.removeFromFavorites(music);
    this.favourites = this.favouritesService.getFavorites(); 
  }
  
}
