import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {

  @Input() experiences;
  constructor() { }
  isView = false;
  viewAllCard= 2;
  category = 'Experience';
  defaultCards = [];


  ngOnInit(): void {
    this.defaultCards = this.experiences.slice(0,2);
  }

  isViewALlExperience(){
    this.isView = true;
    this.defaultCards = [...this.experiences];
    console.log(this.defaultCards, "View all experiences");
    console.log(this.experiences, "View all experiences");
  }
  isCloseALlExperience(){
    this.isView = false;
    console.log(this.defaultCards, "close all experiences");
    this.defaultCards.splice(2);
    console.log(this.defaultCards, "close all experiences");
    console.log(this.experiences, "close all experiences wdjhfjkkj");
  }
  onChange(change){
    if(change === 'Experience'){
      this.category = "Experience";
    }else {
      this.category = "Education";
    }
  }

}
