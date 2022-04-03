import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { UserListService } from '../services/user-list.service';
import { getUsers, getUsersSuccess } from './actions';

@Injectable({
  providedIn: 'root',
})
export class UsersEffects {
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
            return of()
          })
        );
      })
    );
  });
}
