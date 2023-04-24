import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import OnBoardingScreen from './pages/OnBoardingScreen';
import LoginScreen from './pages/LoginScreen';
import Register from './pages/Register';
import AuthNav from './navigation/AuthNav';
import AppNav from './navigation/AppNav';
import { Provider } from 'react-redux/es/exports';
import { store } from './redux/store';
// import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Stack = createNativeStackNavigator();
export default function App() {
    const { user } = useSelector(state = state.userReducer);
    const renderRoute = user === null ? <AuthNav /> : <AppNav />
    return (
        <Provider store={store}>
            <NavigationContainer>

                {renderRoute}
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
    },
    background: {
        flex: 1,

    },
    image: {
        width: 250,
        height: 250,
        marginVertical: 32,
    },
    text: {
        fontSize: 32,
        fontWeight: '900',
        color: 'white',
        textAlign: 'center'
    },
    paragraph: {
        fontWeight: '600',
        color: 'white',
        fontSize: 22,
        paddingHorizontal: 10,
        textAlign: 'justify',
        lineHeight: 28,
        marginVertical: 25

    },
    overleyView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(0,0, 0, 0.5)',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        width: '75%',
        // alignContent: 'center'

    },
    // btnText:{
    //   textAlign:''
    // }

});
