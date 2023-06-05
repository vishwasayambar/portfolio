import { Component, Input, OnInit } from "@angular/core";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  isMobileDevice = window.innerWidth < 720;
  @Input() skills;
  frontendSkills : [{name:string,image:string,category:string}];
  backendSkills :  [{name:string,image:string,category:string}];
  toolsSkills :   [{name:string,image:string,category:string}];
  category: string = "Frontend";
  newSkills;
  constructor() { }

  ngOnInit(): void {
    console.log(this.skills);
    console.log(typeof this.skills);
    const categorizedData = this.skills.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, []);
    this.frontendSkills = categorizedData['Frontend']
    this.backendSkills = categorizedData['Backend']
    this.toolsSkills = categorizedData['Tools']
    console.log(this.newSkills);
    console.log(this.frontendSkills,"FrontEnd Skill");
    console.log(this.backendSkills,"Backend Skill");
    console.log(this.toolsSkills,"Tools Skill");
  }
  onSkillChange(skill){
    if(skill === "Frontend"){
      this.category = "Frontend";
    }else if(skill === "Backend"){
      this.category = "Backend";
    }else {
      this.category = "Tools";
    }
  }

}
