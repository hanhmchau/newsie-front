import { CategoryService } from './../category.service';
import { Component } from "@angular/core";
import Category from "../category";
import { UserService } from '../user.service';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    constructor(private userService: UserService) {}

    ngOnInit(): void {}
}
