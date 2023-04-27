
import React from 'react'
import AuthNav from './navigation/AuthNav';
import AppNav from './navigation/AppNav';
import { useSelector } from "react-redux";

export default function MainRoute() {
    const isAuth = useSelector(state => state.isAuth);
    const [route, setRoute] = React.useState(<AuthNav />)
    React.useEffect(() => {
        console.log(isAuth)
        setRoute(isAuth ? <AppNav /> : <AuthNav />)
        console.log('route')
    }, [isAuth])
    return route

}