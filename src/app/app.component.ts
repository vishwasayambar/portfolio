import { Component } from '@angular/core';
import { navs } from "./Constants/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  navs =  navs
}
