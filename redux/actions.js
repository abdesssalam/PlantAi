export const SET_USER = "REGISTER_USER";



export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user
    })
}

