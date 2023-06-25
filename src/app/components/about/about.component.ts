import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../module/shared/services/shared.service";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
	isMobileDevice = window.innerWidth < 920;
	isDark;

	constructor(private service: SharedService) {
		this.service.isDark$.subscribe(isDark => {
			this.isDark = isDark;
		});
	}

	ngOnInit(): void {
	}

}
