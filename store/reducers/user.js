import {HYDRATE} from 'next-redux-wrapper';
import { UserActions } from '../actions/user'

const initialState = {
    users: ['Trang 1', 'Trang 2', 'Trang 3']
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case UserActions.USER_ADD_SUCCESS:
            return {
                users: [action.payload, ...state.users]
            }
        case UserActions.USER_DELETE:
            const usersDelete = [...state.users];
            usersDelete.splice(action.payload, 1);
            return {
                users: usersDelete
            }
        case UserActions.USER_EDIT_SUCCESS:
            const usersEdit = [...state.users];
            usersEdit[action.payload.idx] = action.payload.txt;
            return {
                users: usersEdit
            }
        default:
            return state;
    }
}

export default userReducer