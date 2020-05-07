import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  waveImage:string = 'assets/img/wave.png'
  bgImage:string = 'assets/img/bg.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
