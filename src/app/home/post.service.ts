import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthService } from "../auth/auth.service";

import { Post } from '../models/Post';

import { environment } from "../../environments/environment";

const BASE_URL = environment.apiUrl;

@Injectable({
    providedIn: "root"
})
export class PostService {
    private posts: any[] = [];
    private postsUpdated = new Subject<{ posts: Post[], postCount: number }>();

    constructor(private http: HttpClient, public authService: AuthService,  private router: Router) {}

    getPosts(postsPerPage: number, currentPage: number) {
        const params = `?pagesize=${postsPerPage}&page=${currentPage}`;
        this.http.get<{success: boolean, data: Post[], count: number}>(`${BASE_URL}posts${params}`).subscribe(data => {
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
        this.http.post<{}>(`${BASE_URL}posts`, data).subscribe(res => {
            this.router.navigate(['/']);
        })
    }
    updatePost(id: any, data: {title: string, content: string}) {
        this.http.put<{}>(`${BASE_URL}posts/${id}`, data).subscribe(res => {
            this.router.navigate(['/']);
        })
    }
    deletePost(id: string | undefined) {
        return this.http.delete(`${BASE_URL}posts/${id}`);
    }
}