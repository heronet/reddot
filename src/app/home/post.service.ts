import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

import { Post } from '../models/Post';

@Injectable({
    providedIn: "root"
})
export class PostService {
    constructor(private http: HttpClient, public authService: AuthService,  private router: Router) {}

    getPosts() {
        return this.http.get<{success: boolean, data: Post[]}>("http://localhost:4000/api/posts");
    }
    createPost(data: {title: string, content: string}) {
        this.http.post<{}>("http://localhost:4000/api/posts", data).subscribe(res => {
            console.log(res);
            this.router.navigate(['/']);
        })
    }
    deletePost(id: string | undefined) {
        this.http.delete(`http://localhost:4000/api/posts/${id}`).subscribe(res => {
            console.log(res);
        })
    }
}