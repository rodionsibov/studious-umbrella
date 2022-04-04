import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { deleteUser } from 'src/app/user-list/store/actions';
import { UserRequest } from 'src/app/user-list/types/user-request';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  user!: UserRequest;

  constructor(@Inject(MAT_DIALOG_DATA) data: { user: UserRequest },private store: Store) {
    this.user = data.user;
  }

  ngOnInit(): void {}

  onClick(): void {
    this.store.dispatch(deleteUser({ id: this.user.id }));
  }
}
