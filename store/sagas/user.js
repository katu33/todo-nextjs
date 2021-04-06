import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {UserActions} from './../actions/user'

function* addUser(action) {
    yield put({type: UserActions.USER_ADD_SUCCESS, payload: action.payload})
}

function* editUser(action) {
    yield put({type: UserActions.USER_EDIT_SUCCESS, payload: action.payload})
}

function* userSaga() {
    yield takeLatest(UserActions.USER_ADD, addUser);
    yield takeEvery(UserActions.USER_EDIT, editUser)
}

export default userSaga