import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isMobileDevice = window.innerWidth < 720;

  constructor() { }

  ngOnInit(): void {
  }
  save(data:NgForm){
    console.log("Form Data",data);
  }

}
