import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Films } from '../films';
import { FilmsService } from '../films.service';

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
    private movieService: FilmsService,
    private location: Location
  ) { }

  ngOnInit() {

  }
  //
  // getFilms(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.filmsService.getFilms(id)
  //     .subscribe(films => this.films = films);
  // }
  //
  // goBack(): void {
  //   this.location.back();
  // }

}
