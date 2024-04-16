import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class ContactUsService {
	// url = "https://formspree.io/f/mjvdnwrn";
  url = "https://formspree.io/f/xdoqpqqe";

	constructor(public http: HttpClient) {

	}

	formSubmit(params: any) {
		return this.http.post(this.url, params);
	}
}
