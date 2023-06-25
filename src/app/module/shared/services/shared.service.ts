import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class SharedService {
	private isDarkSubject = new BehaviorSubject<boolean>(this.getInitialDarkMode());
	isDark$ = this.isDarkSubject.asObservable();

	constructor() {
		this.isDarkSubject.subscribe(isDark => {
			this.setDarkMode(isDark);
		});
	}

	setIsDark(value: boolean): void {
		this.isDarkSubject.next(value);
	}

	private getInitialDarkMode(): boolean {
		const isDarkMode = localStorage.getItem("isDarkMode");
		return isDarkMode ? JSON.parse(isDarkMode) : true;
	}

	private setDarkMode(value: boolean): void {
		localStorage.setItem("isDarkMode", JSON.stringify(value));
	}

}
