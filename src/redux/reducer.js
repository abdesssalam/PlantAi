import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_TOKEN } from "./actions";

const initState = {
    user: null,
    isAuth: false,
    token: null

}

export function PlantAiReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, isAuth: true }
        case LOGIN_FAILURE:
            return { ...state, user: null, isAuth: false }
        case SET_TOKEN:
            return { ...state, token: action.payload }
        default:
            return state
    }
}