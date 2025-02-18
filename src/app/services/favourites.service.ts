import { Injectable } from '@angular/core';
import { MusicCard } from '../interfaces/music-card';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favourites: MusicCard[] = [];

  isFavourite(music:MusicCard): boolean{
    return this.favourites.some(fav => fav.trackId === music.trackId);
  }

  addToFavourites(music:MusicCard): void{
    if(!this.isFavourite(music)){
      this.favourites.push(music);
    }
  }

  getFavorites(): MusicCard[] {
    return [...this.favourites];
  }

  removeFromFavorites(music: MusicCard): void {
    this.favourites = this.favourites.filter(fav => fav.trackId !== music.trackId);
  }
}
