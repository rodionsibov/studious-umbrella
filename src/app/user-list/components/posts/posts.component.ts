import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isSubmittingSelector } from '../../store/selectors';
import { PostRequest } from '../../types/post-request';
import { UserRequest } from '../../types/user-request';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() posts: PostRequest[];
  @Input() user!: UserRequest;
  @Output() onRemoveUser = new EventEmitter<number>();
  
  isSubmitting$!: Observable<boolean>;

  constructor(public dialog: MatDialog, private store: Store) {
    this.posts = [];
  }
  ngOnInit(): void {
    // this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserComponent, {
      data: { user: this.user },
    });
  }

  removeUser(userId: number) {
    this.onRemoveUser.emit(userId);
  }
}
