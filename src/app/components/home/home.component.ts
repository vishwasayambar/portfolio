import { Component, OnInit } from '@angular/core';
// @ts-ignore
import details from "../../../assets/data/data.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = details
  constructor() { }

  ngOnInit(): void {
  }

	protected readonly details = details;
}
