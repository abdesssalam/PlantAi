import { useDispatch } from "react-redux";
import { LOGIN_FAILURE, LOGIN_SUCCESS, loginSuccess, LoginFailure } from "../redux/actions";

import axios from "axios";
import { users } from "../data/Users";

const baseUrl = 'http://127.0.0.1:8000/api/'

// export const register = (firstName, lastName, email, password) => {
//     return axios.post(baseUrl + 'regitser', { firstName, lastName, email, password })
// }



// export const loginService = (email, password) => (dispatch) => {
//     console.log('test aaa')

//     // if (email === 'aitomar@gmail.com' && password === 'admin123') {
//     //     return dispatch(loginSuccess({
//     //         id: 1,
//     //         firstName: 'abdeslam',
//     //         lastName: 'ait omar',
//     //         email: 'aitomar@gmail.com',
//     //         password: 'admin123'
//     //     }))
//     // } else {
//     //     return dispatch(LoginFailure())
//     // }
// }


export function loginService(email, password, dispatch) {

    if (email === 'aitomar@gmail.com' && password === 'admin123') {
        let user = users[0]
        dispatch(loginSuccess(user))
    } else {
        dispatch(LoginFailure())
    }

}

export function registerService(user, dispatch) {

    if (user.email !== 'aitomar@gmail.com') {
        dispatch(loginSuccess(user))
    } else {
        dispatch(LoginFailure())
    }

}