import { View, Text, AppState, Image } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios';
import urls from '../constants/urls';
import { getUserData } from '../services/AuthService';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions';
import routes from '../constants/routes';
import { useIsFocused } from "@react-navigation/native";
import COLORS from '../constants/COLORS';
import responsive, { normalizeFont } from '../constants/responsive';

const SHOW_ON_BOARDING_SCREEN = "SHOW_ON_BOARDING_SCREEN";

export default function SplashScreen({ navigation }) {

    const [isConnected, setConnected] = useState(true);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const [appState, setAppState] = useState(AppState.currentState);


    //functions

    async function to_show_onBoardnig() {
        return await AsyncStorage.getItem(SHOW_ON_BOARDING_SCREEN)

    }

    async function CHECK_IF_CONNECTED() {
        console.log("start checking...")
        console.log("start checking.. 11.")
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
            console.log("user")
            if (user.username) {
                dispatch(loginSuccess(user))
                console.log("redirect to app")
                navigation.navigate(routes.APP_NAV)
            } else {
                if (to_show_onBoardnig) {
                    console.log("redirect to login")
                    navigation.navigate(routes.LOGIN)
                } else {
                    await AsyncStorage.setItem(SHOW_ON_BOARDING_SCREEN, "true")
                    console.log("redirect to onBoardng")
                    navigation.navigate(routes.ON_BOARDING_SCEEN)
                }


            }

        }
    }
    useEffect(() => {
        async function run() {
            await CHECK_IF_CONNECTED();
            await GET_CURRENT_USER();
            // await navigation.navigate(routes.NEW_PASSWORD)
        }

        run();

    }, [navigation])

    return (
        <View
            style={{
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}
        >
            <Image
                source={require('../assets/logo.png')}
                resizeMode='contain'
                style={{
                    width: responsive.WINDOW_WIDTH * 0.5,
                    height: responsive.WINDOW_HEIGHT * 0.5
                }}
            />
            <Text
                style={{
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: normalizeFont(25),
                    fontWeight: 'bold'
                }}
            >AGRI-AI</Text>

        </View>
    )
}

