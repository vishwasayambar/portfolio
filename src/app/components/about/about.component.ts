import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
	isMobileDevice = window.innerWidth < 920;

	constructor() {
	}

	ngOnInit(): void {
	}

}
