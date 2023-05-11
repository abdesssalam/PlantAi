import { View, Text, AppState } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios';
import urls from '../constants/urls';
import { getUserData } from '../services/AuthService';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions';
import routes from '../constants/routes';
import { useIsFocused } from "@react-navigation/native";

export default function SplashScreen({ navigation }) {

    const [isConnected, setConnected] = useState(true);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const [appState, setAppState] = useState(AppState.currentState);

    //functions
    async function CHECK_IF_CONNECTED() {
        console.log("start checking...")
        await axios.head("https://github.com/").then(res => {
            if (res.status === 200) {
                setConnected(true)
            } else {
                console.log("not connected")
                setConnected(false)
            }
        }).catch(er => console.log("err :" + er))
    }

    async function GET_CURRENT_USER() {
        if (isConnected) {
            const user = await getUserData()
            if (user.username) {
                dispatch(loginSuccess(user))
                console.log("redirect to app")
                navigation.navigate(routes.APP_NAV)
            } else {
                console.log("redirect to login")
                navigation.navigate(routes.LOGIN)
            }

        }
    }
    useEffect(() => {
        async function run() {
            await CHECK_IF_CONNECTED();
            await GET_CURRENT_USER();
        }

        run();

    }, [navigation])

    return (
        <View>
            <Text>Welcome to AGRI AI</Text>
        </View>
    )
}

