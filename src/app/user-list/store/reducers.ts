import { Action, createReducer, on } from '@ngrx/store';
import { UserListState } from '../types/user-list-state';
import { UserRequest } from '../types/user-request';
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

const initialState: UserListState = {
  isSubmitting: false,
  currentUser: { id: 0, address: {}, company: {} },
  users: [],
  posts: [],
};

const userListReducer = createReducer(
  initialState,
  on(
    getUsers,
    (state, action): UserListState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    getUsersSuccess,
    (state, { users }): UserListState => ({
      ...state,
      isSubmitting: false,
      users,
    })
  ),
  on(
    updateUser,
    (state, { user }): UserListState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateUserSuccess,
    (state, { user }): UserListState => ({
      ...state,
      isSubmitting: false,
      users: state.users.map((item) => {
        return user.id === item.id ? user : item;
      }),
    })
  ),

  on(
    getPosts,
    (state, action): UserListState => ({
      ...state,
    })
  ),
  on(
    getPostsSuccess,
    (state, { posts }): UserListState => ({
      ...state,
      posts,
    })
  ),
  on(
    deleteUser,
    (state, { id }): UserListState => ({
      ...state
    })
  ),
  on(
    deleteUserSuccess,
    (state, { id }): UserListState => ({
      ...state,
      users: state.users.filter((user) => user.id !== id)
    })
  )
);

export function reducers(state: UserListState, action: Action) {
  return userListReducer(state, action);
}
