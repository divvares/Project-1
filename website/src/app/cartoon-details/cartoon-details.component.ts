import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Cartoons } from '../cartoon-service/cartoons';
import { CartoonsService } from '../cartoon-service/cartoons.service';

@Component({
  selector: 'app-cartoon-details',
  templateUrl: './cartoon-details.component.html',
  styleUrls: ['./cartoon-details.component.css']
})
export class CartoonDetailsComponent implements OnInit {

  cartoons: Cartoons;

  commentsLogo:string = "assets/img/commentLogo.png"

  constructor(
    private route: ActivatedRoute,
    private cartoonsService: CartoonsService
  ) { }

  ngOnInit() {
    this.getCartoons();
  }

  getCartoons(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cartoonsService.getCartoons(id)
      .subscribe(cartoons => this.cartoons = cartoons);
  }
}
