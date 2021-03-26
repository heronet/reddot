import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';


const BASE_URL = environment.apiUrl;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit, OnDestroy {
  @Input() post: any;
  postCreator: string = "";
  @Input()  postDeletable = false;
  @Input() userId: any;
  
  @Output() spinnerEvent = new EventEmitter<void>();
  @Output() postDeleted = new EventEmitter<any>();

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User>(`${BASE_URL}users/${this.post?.creator}`).subscribe(res => {
      this.postCreator= res.username;
      this.spinnerEvent.emit();
    });
  }

  ngOnDestroy() {
    
  }
  deletePost() {
    this.postDeleted.emit(this.post._id);
  }

}
