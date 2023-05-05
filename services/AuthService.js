import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


const BASE_URL = 'http://10.0.2.2:8000/api'






export const registerService = async (user) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, user);

        return response.data.user;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const loginService = async (email, password) => {
    const response =
        await axios.post(`${BASE_URL}/login`, { email, password })
            .then((res) => {
                // let d = JSON.parse(res)
                const token = res.data.access_token;
                AsyncStorage.setItem('token', token);
                const user = res.data.user;
                return { user: user, token: token };
            }).catch(er => {

                console.log(er)
            });
    await AsyncStorage.setItem('token', response.token);
    return response

}


export const getUserData = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            console.log("tryyyy")
            throw new Error('No token found');
        }

        const response = await axios.get(`${BASE_URL}/user`, { headers: { Authorization: `Bearer ${token}` } }).catch(er => console.log(er));
        const user = response.data.user;
        return user;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const userLogout = async () => {
    try {
        console.log("logout")
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }

        const response = await axios.post(`${BASE_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } }).catch(er => console.log(er));
        await AsyncStorage.removeItem('token')
        console.log("logout response")
        console.log(response)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}