import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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

  date: string;
  
  @Output() spinnerEvent = new EventEmitter<void>();
  @Output() postDeleted = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.spinnerEvent.emit();
    this.date = this.post.date.replace('T', " at ").split('.')[0];
  }

  ngOnDestroy() {
    
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
