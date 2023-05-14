import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isMobileDevice = window.innerWidth < 720;
  constructor() { }

  ngOnInit(): void {
  }

}
