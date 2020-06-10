import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Films } from '../film-service/films';
import { FilmsService } from '../film-service/films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  films: Films;

  commentsLogo:string = "assets/img/commentLogo.png"

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService
    ) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmsService.getFilms(id)
      .subscribe(films => this.films = films);
  }
}
