export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOUGOUT'
export const SET_TOKEN = 'SET_TOKEN'

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const LoginFailure = () => ({ type: LOGIN_FAILURE })

export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token
})