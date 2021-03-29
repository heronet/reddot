import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit, OnDestroy {
  @Input() post: any;
  @Input() postDeletable = false;
  @Input() userId: any;
  @Input() username: any;
  panelOpenState = false;

  date: string;
  comments: [{author: string, opinion: string}];
  
  @Output() spinnerEvent = new EventEmitter<void>();
  @Output() postDeleted = new EventEmitter<any>();
  @Output() commentCreated = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.spinnerEvent.emit();
    this.date = this.post.date.replace('T', " at ").split('.')[0];
    this.comments = this.post.comments;
  }

  ngOnDestroy() {
    
  }
  newComment(form: NgForm) {
    if(this.username) {
      let comment = {author: this.username, opinion: form.value.comment};
      this.comments.push(comment);
      this.post.comments = this.comments;
      this.commentCreated.emit(this.post);
    }
  }
  deletePost() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res)
        this.postDeleted.emit(this.post._id);
    });
  }
}
