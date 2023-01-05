// import i18n from '@i18n';
// import { messageHandlerSet } from '@redux/messageHandler/actions';
import { PayloadAction } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';
import {
  getUsersListFailed,
  getUsersListRequest,
  getUsersListSuccess,
} from "@redux/HomeRedux/index"

import {
    UsersRequestPayload,
    UsersSuccessPayload,
 } from "@redux/HomeRedux/types"

import * as UsersAPI from "@services/HomeServices";

function* getUsersListSaga({ payload }: PayloadAction<UsersRequestPayload>) {
    try {
      const response: UsersSuccessPayload = yield call(UsersAPI.getUsers, { ...payload });
  
      if (!isEmpty(response)) {
        yield put(getUsersListSuccess(response));
      } else {
        yield put(getUsersListFailed());
      }
    } catch (err) {
      yield put(getUsersListFailed());
    }
}



// ---------------------- INNIT MAP REDUX WITH REDUX-SAGA ------------
  function* HomeSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(getUsersListRequest.type, getUsersListSaga);
  }
  export default HomeSaga;