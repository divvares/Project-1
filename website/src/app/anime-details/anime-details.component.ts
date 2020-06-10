import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Animes } from '../anime-service/animes';
import { AnimesService } from '../anime-service/animes.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  animes: Animes;

  commentsLogo:string = "assets/img/commentLogo.png"

  constructor(
    private route: ActivatedRoute,
    private animesService: AnimesService
  ) { }

  ngOnInit() {
    this.getAnimes();
  }

  getAnimes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animesService.getAnimes(id)
      .subscribe(animes => this.animes = animes);
  }
}
