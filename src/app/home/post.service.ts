import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthService } from "../auth/auth.service";

import { Post } from '../models/Post';

@Injectable({
    providedIn: "root"
})
export class PostService {
    private posts: any[] = [];
    private postsUpdated = new Subject<{ posts: Post[], postCount: number }>();

    constructor(private http: HttpClient, public authService: AuthService,  private router: Router) {}

    getPosts(postsPerPage: number, currentPage: number) {
        const params = `?pagesize=${postsPerPage}&page=${currentPage}`;
        this.http.get<{success: boolean, data: Post[], count: number}>(`http://localhost:4000/api/posts${params}`).subscribe(data => {
            console.log(data);
            this.posts = data.data;
            this.postsUpdated.next({posts: [...this.posts], postCount: data.count});
        });
    }
    getPost(id: any) {
        return {...this.posts.find(p => p._id === id)};
    }
    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }
    createPost(data: {title: string, content: string}) {
        this.http.post<{}>("http://localhost:4000/api/posts", data).subscribe(res => {
            this.router.navigate(['/']);
        })
    }
    updatePost(id: any, data: {title: string, content: string}) {
        this.http.put<{}>(`http://localhost:4000/api/posts/${id}`, data).subscribe(res => {
            this.router.navigate(['/']);
        })
    }
    deletePost(id: string | undefined) {
        return this.http.delete(`http://localhost:4000/api/posts/${id}`);
    }
}