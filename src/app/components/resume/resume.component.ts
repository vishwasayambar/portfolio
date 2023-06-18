import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-resume",
	templateUrl: "./resume.component.html",
	styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
	isMobileDevice = window.innerWidth < 920;

	constructor() {
	}

	ngOnInit(): void {
	}

}
