import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../module/shared/services/shared.service";

@Component({
	selector: "app-resume",
	templateUrl: "./resume.component.html",
	styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
	isMobileDevice = window.innerWidth < 920;
	isDark;

	constructor(protected sharedService: SharedService) {
		sharedService.isDark$.subscribe(response => {
			this.isDark = response;
		});
	}

	ngOnInit(): void {
	}

}
