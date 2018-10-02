import { SinglePostComponent } from './single-post/single-post.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: "",
        component: PostContainerComponent,
        pathMatch: 'full'
    },
    {
        path: "post/:id",
        component: SinglePostComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
    // {
    //     path: "user/:id",
    //     component: UserComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
