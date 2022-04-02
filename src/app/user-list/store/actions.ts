import { createAction, props } from '@ngrx/store';
import { UserRequest } from '../types/user-request';
import { ActionTypes } from './action-types';

export const updateUser = createAction(
  ActionTypes.USER,
  props<{ request: UserRequest }>()
);
