import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serial-details',
  templateUrl: './serial-details.component.html',
  styleUrls: ['./serial-details.component.css']
})
export class SerialDetailsComponent implements OnInit {

  commentsLogo:string = "assets/img/commentLogo.png"

  constructor() { }

  ngOnInit(): void {
  }

}
