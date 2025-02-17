import { Routes } from '@angular/router';
import { MusicsListComponent } from './components/musics-list/musics-list.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'home',component:MusicsListComponent},
    {path: 'favourites',component:FavouritesComponent},
    {path: 'contact',component:ContactUsComponent},
    {path: '', redirectTo: '/home' , pathMatch: 'full'},
    {path: '**',component:PageNotFoundComponent},
];
