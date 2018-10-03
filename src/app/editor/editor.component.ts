import { PostService } from './../post.service';
import { CategoryService } from './../category.service';
import { Component, Input } from "@angular/core";
import Category from "../category";
import Post from '../post';

@Component({
    selector: "app-editor",
    templateUrl: "./editor.component.html",
    styleUrls: ["./editor.component.css"]
})
export class EditorComponent {
    @Input() post: Post = new Post();
    private categories: Category[];

    constructor(private postService: PostService, private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.categoryService.getCategories().subscribe(categories => this.categories = categories);
        this.post = this.post || new Post();
    }

    uploadPreviewImage(files: FileList): void {
        if (files.length) {
            const image = files.item(0);
            const postId = this.post.id || 0;
            this.postService.uploadPreviewImage(postId.toString(), image)
                .subscribe((data: any) => {
                    console.log(data);
                });
        }
    }
}
