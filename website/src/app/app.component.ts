import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  userLogo:string = "assets/img/userLogo.png"
  bgPage:string = 'assets/img/bgImage.jpg'
}
