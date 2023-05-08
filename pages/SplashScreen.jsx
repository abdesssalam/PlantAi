import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AppNav from '../navigation/AppNav';
import AuthNav from '../navigation/AuthNav';
import { getUserData } from '../services/AuthService';
import { loginSuccess } from '../redux/actions';

export default function SplashScreen() {
    const [connected, setConnected] = React.useState(false)
    const isAuth = useSelector(state => state.isAuth);
    const [route, setRoute] = React.useState(null)
    const dispatch = useDispatch()

    React.useEffect(() => {
        //checkeing internet connection
        async function checking() {
            console.log("start checking...")
            await axios.head("http://127.0.0.1:8000").then(res => {
                if (res.status === 200) {
                    setConnected(true)
                    console.log('connected')
                } else {
                    console.log("not connected")
                    setConnected(false)
                }
            }).catch(er => console.log("err :" + er))
        }
        //geting user
        async function getUser() {
            console.log("getiing user....")
            try {
                const user = await getUserData();
                console.log(user)
                dispatch(loginSuccess(user))
            } catch (er) {
                console.log(er)
            }
        }

        setConnected(true)
        // checking()

        if (connected) {
            getUser()
            console.log("auth :======")
            console.log(isAuth)
            console.log("auth :======")
            // console.log(user)
            setRoute(isAuth ? <AppNav /> : <AuthNav />)
        }


    }, [connected, isAuth])

    return connected ? route : <DrawSplashScreen />
}

export const DrawSplashScreen = () => {
    return (
        <View>
            <Text>SplashScreen </Text>
        </View>
    )
}