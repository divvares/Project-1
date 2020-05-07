import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  commentsLogo:string = "assets/img/commentLogo.png"

  constructor() { }

  ngOnInit(): void {
  }

}
