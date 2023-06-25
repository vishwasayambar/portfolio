import { NgOptimizedImage } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment.prod";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ExperianceComponent } from "./components/experiance/experiance.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { MainComponent } from "./components/main/main.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { SocialComponent } from "./components/social/social.component";
import { AngularMaterialModule } from "./module/angular-material/angular-material.module";


@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		AboutComponent,
		ExperianceComponent,
		ContactComponent,
		FooterComponent,
		SkillsComponent,
		SocialComponent,
		ProjectsComponent,
		ContactComponent,
		ResumeComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularMaterialModule,
		BrowserAnimationsModule,
		NgOptimizedImage,
		FormsModule,
		HttpClientModule,
		ServiceWorkerModule.register("ngsw-worker.js", {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: "registerWhenStable:30000"
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
