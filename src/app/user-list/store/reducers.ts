import { Action, createReducer, on } from '@ngrx/store';
import { UserListState } from '../types/user-list-state';
import { getUsers, updateUser } from './actions';

const initialState: UserListState = {
  isSubmitting: false,
  currentUser: null,
  users: null,
  posts: null,
};

const userListReducer = createReducer(
  initialState,
  on(updateUser, (state): UserListState => ({ ...state, isSubmitting: true})),
);

export function reducers(state: UserListState, action: Action) {
  return userListReducer(state, action);
}
