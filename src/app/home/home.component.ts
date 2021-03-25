import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
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
  private authListenerSubs: Subscription = new Subscription;
  postDeletable: any = undefined;

  showSpinner = true;
  
  constructor(public postService: PostService, public authService: AuthService) { }

  ngOnInit(): void {
    this.postDeletable = this.authService.getAuthStatus();
    this.postService.getPosts().subscribe(res => {
        this.posts = res.data;
    });
    
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(deletable => {
        this.postDeletable = deletable;
        console.log(deletable);
    });
    
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  spinner() {
    this.showSpinner = false;
  }

}
