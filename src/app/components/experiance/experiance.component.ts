import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-experiance",
	templateUrl: "./experiance.component.html",
	styleUrls: ["./experiance.component.scss"]
})
export class ExperianceComponent implements OnInit {

	@Input() experiences;
	@Input() educations;
	isMobileDevice = window.innerWidth < 720;
	isView = false;
	category = "Experience";
	defaultExperienceCards = [];
	defaultEducationCards = [];

	constructor() {
	}

	ngOnInit(): void {
		this.defaultExperienceCards = this.experiences.slice(0, 2);
		this.defaultEducationCards = this.educations.slice(0, 2);
	}

	isViewALlExperience() {
		this.isView = true;
		this.defaultExperienceCards = [...this.experiences];
		this.defaultEducationCards = [...this.educations];
	}

	isCloseALlExperience() {
		this.isView = false;
		this.defaultExperienceCards.splice(2);
		this.defaultEducationCards.splice(2);
	}

	onChange(change) {
		if (change === "Experience") {
			this.category = "Experience";
		} else {
			this.category = "Education";
		}
	}

}
