import { CategoryService } from './../category.service';
import { Component } from "@angular/core";
import Category from "../category";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
    private categories: Category[] = [];

    constructor(private categoryService: CategoryService) {

    }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    }
}
