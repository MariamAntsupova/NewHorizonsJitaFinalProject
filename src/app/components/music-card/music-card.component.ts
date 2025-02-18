import { Component, Input} from '@angular/core';
import { MusicCard } from '../../interfaces/music-card';
import { Router } from '@angular/router';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-music-card',
  imports: [],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.css'
})
export class MusicCardComponent {
  @Input() music!: MusicCard;

  constructor(private router:Router ,private favouritesService: FavouritesService){}

  goToDetails(trackId:string){
    if(this.music){
      this.router.navigate([`/music-details/${this.music.trackId}`])
    }
  }

  addToFavorites(music: MusicCard): void {
    this.favouritesService.addToFavourites(music);
  }

}
