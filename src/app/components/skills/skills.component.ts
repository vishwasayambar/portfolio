import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  isMobileDevice = window.innerWidth < 720;
  @Input() skills: [] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.skills);
  }

}
