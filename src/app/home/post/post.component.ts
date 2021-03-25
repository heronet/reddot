import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: any;
  postCreator: string = "";
  @Input()  postDeletable = false;
  
  @Output() spinnerEvent = new EventEmitter<void>();

  constructor(private postService: PostService, public http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<User>(`http://localhost:4000/api/users/${this.post?.creator}`).subscribe(res => {
      this.postCreator= res.username;
      this.spinnerEvent.emit();
    });
  }

  ngOnDestroy() {
    
  }
  deletePost() {
    this.postService.deletePost(this.post?._id);
  }

}
