import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';

export const updateUser = createAction(
  ActionTypes.USER,
  props<{ username: string; password: string }>()
);
