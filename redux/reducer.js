import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initState = {
    user: null,
    isAuth: false

}

export function PlantAiReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, isAuth: true }
        case LOGIN_FAILURE:
            return { ...state, user: null, isAuth: false }
        default:
            return state
    }
}