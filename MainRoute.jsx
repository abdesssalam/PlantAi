
import React from 'react'
import AuthNav from './navigation/AuthNav';
import AppNav from './navigation/AppNav';
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from './services/AuthService';
import { loginSuccess } from './redux/actions';
import SplashScreen from './pages/SplashScreen';


export default function MainRoute() {

    React.useEffect(() => {

    }, [isAuth])
    // return route === null ? <SplashScreen /> : route
    return <SplashScreen />

}