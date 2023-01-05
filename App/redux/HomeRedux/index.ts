import {createAction, createReducer, createSelector} from '@reduxjs/toolkit';
import type {RootState} from '@redux/reducers';
// import { uniqBy } from 'lodash';
import {UsersRequestPayload, UsersSuccessPayload, User} from './types';

// ----------------- INNIT ACTIONS -------------------

export const getUsersListRequest = createAction<UsersRequestPayload>('ACTION/GET_USERS_LIST_REQUEST');
export const getUsersListSuccess = createAction<UsersSuccessPayload>('ACTION/GET_USERS_LIST_SUCCESS');
export const getUsersListFailed = createAction('ACTION/GET_USERS_LIST_FAILED');

// ----------------- INNIT REDUCERS -------------------
export interface UsersState {
  usersList: {
    loading: boolean;
    users: User[];
    page: number;
    total: number | undefined;
    total_pages: number | undefined;
  };
  userDetails: {
    loading: boolean;
    details: User | null;
  };
}

const initialState: UsersState = {
  usersList: {
    loading: false,
    users: [],
    page: 1,
    total: undefined,
    total_pages: undefined,
  },
  userDetails: {
    loading: false,
    details: null,
  },
};

export const usersReducer = createReducer(initialState, {
  [getUsersListRequest.type]: state => {
    state.usersList.loading = true;
  },
  [getUsersListSuccess.type]: (state, action) => {
    state.usersList.loading = false;
    state.usersList.users = [...state.usersList.users, ...action.payload.data];
    state.usersList.page = action.payload.page;
    state.usersList.total = action.payload.total;
    state.usersList.total_pages = action.payload.total_pages;
  },
  [getUsersListFailed.type]: state => {
    state.usersList.loading = false;
  },
});

// ----------------- INNIT SELECTOR -------------------
const usersSelector = (state: RootState) => state.users;

export const allUsersLoading = createSelector(usersSelector, userState => userState.usersList.loading);
export const usersListCurrentPage = createSelector(usersSelector, usersState => usersState.usersList.page);
export const usersListTotalResults = createSelector(usersSelector, usersState => usersState.usersList.total);
export const usersListTotalPages = createSelector(usersSelector, usersState => usersState.usersList.total_pages);
