import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects;
  isMobileDevice = window.innerWidth < 720;
  category: string = "WebProjects";
  webProjects:[{name:string,image:string,category:string}];
  angular:[{name:string,image:string,category:string}];
  blogs:[{name:string,image:string,category:string}];
  constructor() { }

  ngOnInit(): void {
    console.log("projects", this.projects);
    const seperateProject = this.projects.reduce((acc, project) => {
      if(!acc[project.category]){
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, [])
    console.log(seperateProject)
    this.webProjects = seperateProject['WebProjects'];
    this.angular = seperateProject['Angular'];
    this.blogs = seperateProject['Blogs'];
    console.log(this.webProjects);
    console.log(this.angular);
    console.log(this.blogs);
  }
  onChange(fields){
    if(fields === "WebProjects"){
      this.category = "WebProjects";
    }else if(fields === "Blogs"){
      this.category = "Blogs";
    }else if(fields === "laravel"){
      this.category = "laravel";
    }else if(fields === "Angular"){
      this.category = "Angular";
    }else{
      this.category = "BasicWebAp";
    }
  }

}
