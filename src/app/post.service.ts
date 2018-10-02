import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import consts from '../consts';
import Category from './category';
import Post from './post';

@Injectable({
    providedIn: "root"
})
export class PostService {
    private postUrl = `${consts.API}/post`; // URL to web api
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postUrl);
    }

    getPostById(id: string): Observable<Post> {
        return this.http.get<Post>(`${this.postUrl}/${id}`);
    }
}
