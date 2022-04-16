import { act } from '@ngrx/effects';
import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
function registerFuilureAction(
  registerFuilureAction: any,
  arg1: (state: AuthStateInterface, action: any) => AuthStateInterface
): import('@ngrx/store').ReducerTypes<
  AuthStateInterface,
  readonly import('@ngrx/store').ActionCreator<
    string,
    import('@ngrx/store').Creator<any[], object>
  >[]
> {
  throw new Error('Function not implemented.');
}
