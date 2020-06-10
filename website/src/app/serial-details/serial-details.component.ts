import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Serials } from '../serial-service/serials';
import { SerialsService } from '../serial-service/serials.service';

@Component({
  selector: 'app-serial-details',
  templateUrl: './serial-details.component.html',
  styleUrls: ['./serial-details.component.css']
})
export class SerialDetailsComponent implements OnInit {

  serials: Serials;

  commentsLogo:string = "assets/img/commentLogo.png"

  constructor(
    private route: ActivatedRoute,
    private serialsService: SerialsService
  ) { }

  ngOnInit() {
    this.getSerials();
  }

  getSerials(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serialsService.getSerials(id)
      .subscribe(serials => this.serials = serials);
  }
}
