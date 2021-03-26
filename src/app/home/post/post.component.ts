import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit, OnDestroy {
  @Input() post: any;
  @Input()  postDeletable = false;
  @Input() userId: any;
  
  @Output() spinnerEvent = new EventEmitter<void>();
  @Output() postDeleted = new EventEmitter<any>();

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.spinnerEvent.emit();
  }

  ngOnDestroy() {
    
  }
  deletePost() {
    this.postDeleted.emit(this.post._id);
  }

}
