import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  isMobileDevice = window.innerWidth < 720;
  constructor() { }

  ngOnInit(): void {
  }

}
