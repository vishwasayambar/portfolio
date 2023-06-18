import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
	isMobileDevice = window.innerWidth < 920;
	developerNames = ["Frontend Developer", "Backend Developer", "Fullstack Developer",];
	currentTextIndex = 0; // Current Text Index of the Array
	displayText = ""; // Text to display

	constructor() {
	}

	ngOnInit(): void {
		this.typeEffect();
	}

	typeEffect() {
		const currentText = this.developerNames[this.currentTextIndex]; // current Text gets from array using current index
		const currentTextLength = currentText.length; //Current Text Length
		let i = 0; // Increment required for traversing current texts character on by one

		const typewritingEffect = setInterval(() => {
			if (i < currentTextLength) {
				this.displayText += currentText.substring(i, i + 1);
				if (this.displayText.length === currentTextLength) {
					setTimeout(() => {
					}, 200);
				}
				i++;
			} else {
				clearInterval(typewritingEffect);
				setTimeout(() => {
					this.currentTextIndex++;
					if (this.currentTextIndex >= this.developerNames.length) {
						this.currentTextIndex = 0;
					}
					this.typeEffect();
					this.displayText = "";
				}, 2000);
			}
		}, 100);

	}


}
