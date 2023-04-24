import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/'

export const register = (firstName, lastName, email, password) => {
    return axios.post(baseUrl + 'regitser', { firstName, lastName, email, password })
}
