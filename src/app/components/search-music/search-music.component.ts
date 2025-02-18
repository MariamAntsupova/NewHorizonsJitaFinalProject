import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-music',
  imports: [FormsModule],
  templateUrl: './search-music.component.html',
  styleUrl: './search-music.component.css'
})
export class SearchMusicComponent {

  searchQuery :string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch(): void{
    this.searchEvent.emit(this.searchQuery);
  }
}
