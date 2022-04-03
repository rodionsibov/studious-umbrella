import { createAction, props } from '@ngrx/store';
import { PostRequest } from '../types/post-request';
import { UserRequest } from '../types/user-request';
import { ActionTypes } from './action-types';

export const getPosts = createAction(ActionTypes.GET_POSTS);

export const getPostsSuccess = createAction(
  ActionTypes.GET_POSTS_SUCCESS,
  props<{ posts: PostRequest[] }>()
);

export const getUsers = createAction(ActionTypes.GET_USERS);

export const getUsersSuccess = createAction(
  ActionTypes.GET_USERS_SUCCESS,
  props<{ users: UserRequest[] }>()
);

export const updateUser = createAction(
  ActionTypes.UPDATE_USER_ACTION,
  props<{ user: UserRequest }>()
);

export const deleteUser = createAction(
  ActionTypes.DELETE_USER_ACTION,
  props<{ id: string }>()
);
