import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { Post } from '../models/Post';
import { PostService } from './post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  status: any;

  private authListenerSubs: Subscription = new Subscription;
  private authStatusSubs: Subscription = new Subscription;
  private nameListenerSubs: Subscription = new Subscription;
  private postsListenerSubs: Subscription = new Subscription;
  postDeletable: any = undefined;
  showSpinner = true;

  totalPosts = 0;
  postsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10, 20];

  userId: any;
  username: any;
  
  constructor(public postService: PostService, public authService: AuthService) { }

  ngOnInit(): void {
    this.postDeletable = this.authService.getAuthStatus();
    this.username = this.authService.getUserName();
    this.postService.getPosts(this.postsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    this.authStatusSubs = this.authService.getAuthStatusListener().subscribe(authStatus => {
      this.showSpinner = false;
    })
    this.postsListenerSubs = this.postService.getPostUpdateListener().subscribe(posts => {
      this.posts = posts.posts;
      this.totalPosts = posts.postCount;
    });
    
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(deletable => {
      this.postDeletable = deletable;
      this.userId = this.authService.getUserId();
    });
    this.nameListenerSubs = this.authService.getUserNameSub().subscribe(name => {
      this.username = name;
    });
    
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.postsListenerSubs.unsubscribe();
    this.authStatusSubs.unsubscribe();
    this.nameListenerSubs.unsubscribe();
  }
  spinner() {
    this.showSpinner = false;
  }
  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
  }

  onStatusUpdate(content: any) {
    const date = new Date().toLocaleString();
    const title = `${this.username}'s feeling on ${date}`;
    this.postService.createPostWithRefresh({title, content, image: null}).subscribe(res => {
      this.postService.getPosts(this.postsPerPage, this.currentPage);
    });
    
  }
  onCommentCreated(post) {
    this.postService.addComment(post._id, post);
  }

  deletePost(id: string) {
    this.postService.deletePost(id).subscribe(() => {
      this.postService.getPosts(this.postsPerPage, this.currentPage);
    }, () => {
      this.showSpinner = false;
    });
  }
}
