import { useDispatch } from "react-redux";
import { LOGIN_FAILURE, LOGIN_SUCCESS, loginSuccess, LoginFailure } from "../redux/actions";

import axios from "axios";
import { users } from "../data/Users";

const baseUrl = 'http://127.0.0.1:8000/api/'




export function loginService(email, password, dispatch) {

    if (email === 'admin@wehelp.ma' && password === 'admin123') {
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