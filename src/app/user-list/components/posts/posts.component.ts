import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { DialogComponent } from 'src/app/shared/modules/dialog/components/dialog/dialog.component';
import { deleteUser, getPosts } from '../../store/actions';
import { postsSelector } from '../../store/selectors';
import { PostRequest } from '../../types/post-request';
import { UserRequest } from '../../types/user-request';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() user!: UserRequest;

  posts: PostRequest[] = [];
  posts$ = this.store.pipe(select(postsSelector));

  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getPosts({ id: this.user.id }));
    this.posts$.subscribe((res) => {
      this.posts = res;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: { user: this.user },
    });
  }

  removeUser(userId: number) {
    // if (confirm('Are you sure you want to remove this user?')) {
    //   this.store.dispatch(deleteUser({ id: userId }));
    // }

    const dialogRef = this.dialog.open(DialogComponent, {
      data: { user: this.user },
    });
  }
}
