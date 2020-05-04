import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  commentsLogo:string = "assets/img/commentLogo.png"

  constructor() { }

  ngOnInit(): void {
  }

}
