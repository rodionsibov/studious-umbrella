import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/types/app-state';
import { UserListState } from '../types/user-list-state';

export const userListFeatureSelector = createFeatureSelector<
  UserListState
>('user-list');

export const isSubmittingSelector = createSelector(
  userListFeatureSelector,
  (userListState: UserListState) => userListState.isSubmitting
);

export const usersSelector = createSelector(
  userListFeatureSelector,
  (userListState: UserListState) => userListState.users
);

export const postsSelector = createSelector(
  userListFeatureSelector,
  (userListState: UserListState) => userListState.posts
);

export const currentUserSelector = createSelector(
  userListFeatureSelector,
  (userListState: UserListState) => userListState.currentUser
);
