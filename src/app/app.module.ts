import { NgOptimizedImage } from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from "./module/angular-material/angular-material.module";
import { SkillsComponent } from './components/skills/skills.component';
import { SocialComponent } from './components/social/social.component';
import { ProjectsComponent } from './components/projects/projects.component';

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
    ProjectsComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularMaterialModule,
		BrowserAnimationsModule,
		NgOptimizedImage,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
