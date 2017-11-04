import { Component } from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "list",
    templateUrl: "./components/profile/profile.xml",
})

export class ProfileComponent {
	private router: Router;
	public personList: Array<Object>;

	constructor(router: Router, location: Location) {
		this.router = router;
		this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
		location.subscribe(path) => {
			this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
		}
    }

    create() {
        this.router.navigate(["Create"]);
    }
}