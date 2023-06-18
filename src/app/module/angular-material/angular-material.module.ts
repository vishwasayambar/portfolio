import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";


const MaterialComponents = [
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatSidenavModule,
	MatListModule,
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MaterialComponents,
	],
	exports: [MaterialComponents]
})
export class AngularMaterialModule {
}
