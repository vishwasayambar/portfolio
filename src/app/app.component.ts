import { Component } from "@angular/core";
// @ts-ignore
import details from "../assets/data/data.json";
import { navs } from "./Constants/constants";
import { SharedService } from "./module/shared/services/shared.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	isMobileDevice = window.innerWidth < 920;
	title = "portfolio";
	navs = navs;
	data = details;
	isDark = true;

	constructor(protected service: SharedService) {
	}

	toggleTheme() {
		this.isDark = !this.isDark;
		this.service.setIsDark(this.isDark);
	}
}
