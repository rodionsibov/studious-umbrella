import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() posts!: Post[];
  @Input() userId!: User;
  @Output() onRemoveUser = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(UserComponent);
    console.log(this.userId);
    
  }

  removeUser(userId: any) {
    this.onRemoveUser.emit(userId);
  }
}
