import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  waveImage:string = 'assets/img/wave.png'
  bgImage:string = 'assets/img/bg.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
