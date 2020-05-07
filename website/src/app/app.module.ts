import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { SerialDetailsComponent } from './serial-details/serial-details.component';
import { CartoonDetailsComponent } from './cartoon-details/cartoon-details.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmDetailsComponent,
    HomeComponent,
    AuthorizationComponent,
    RegistrationComponent,
    SerialDetailsComponent,
    CartoonDetailsComponent,
    AnimeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
