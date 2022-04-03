import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { UserListService } from '../services/user-list.service';
import {
  deleteUser,
  deleteUserSuccess,
  getPosts,
  getPostsSuccess,
  getUsers,
  getUsersSuccess,
  updateUser,
  updateUserSuccess,
} from './actions';

@Injectable({
  providedIn: 'root',
})
export class UserListEffects {
  constructor(
    private actions$: Actions,
    private userListService: UserListService
  ) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsers),
      switchMap((action) => {
        return this.userListService.getUsers().pipe(
          map((users) => {
            return getUsersSuccess({ users });
          }),
          catchError(() => {
            return of();
          })
        );
      })
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUser),
      switchMap((action) => {
        return this.userListService.updateUser(action.user).pipe(
          map((users) => {
            return updateUserSuccess(action);
          }),
          catchError(() => {
            return of();
          })
        );
      })
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUser),
      switchMap((action) => {
        return this.userListService.deleteUser(action.id).pipe(
          map(() => {
            return deleteUserSuccess();
          }),
          catchError(() => {
            return of();
          })
        );
      })
    );
  });

  getPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPosts),
      switchMap((action) => {
        return this.userListService.getPosts(action.id).pipe(
          map((posts) => {
            return getPostsSuccess({posts});
          }),
          catchError(() => {
            return of();
          })
        );
      })
    );
  });  
}
