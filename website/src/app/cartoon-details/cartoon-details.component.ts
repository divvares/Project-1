import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoon-details',
  templateUrl: './cartoon-details.component.html',
  styleUrls: ['./cartoon-details.component.css']
})
export class CartoonDetailsComponent implements OnInit {
  
  commentsLogo:string = "assets/img/commentLogo.png"

  constructor() { }

  ngOnInit(): void {
  }

}
