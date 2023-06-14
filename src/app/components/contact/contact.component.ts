import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { ContactUsService } from "../../module/shared/contact-us.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isMobileDevice = window.innerWidth < 920;

  constructor(protected service:ContactUsService) { }

  ngOnInit(): void {
  }
  save(data:NgForm){

    this.service.formSubmit(data).subscribe(response => {
      console.log(response);
      alert('Form saved successfully');
    }, err => {
      console.log(err);
    });
    // console.log("Form Data",data)
  }

}
