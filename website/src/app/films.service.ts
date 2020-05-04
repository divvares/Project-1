import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }

  getFilms(): Observable<Films[]> {
  return of(FILMS);
}

  getFilms(id: number): Observable<Films> {
    return of(FILMS.find(films => films.id === id));
}
}
