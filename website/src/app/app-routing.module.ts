import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmDetailsComponent } from './film-details/film-details.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SerialDetailsComponent } from './serial-details/serial-details.component';
import { CartoonDetailsComponent } from './cartoon-details/cartoon-details.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'film-details/:id', component: FilmDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'serial-details/:id', component: SerialDetailsComponent},
  { path: 'cartoon-details/:id', component: CartoonDetailsComponent},
  { path: 'anime-details/:id', component: AnimeDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
