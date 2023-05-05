
import React from 'react'
import AuthNav from './navigation/AuthNav';
import AppNav from './navigation/AppNav';
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from './services/AuthService';
import { loginSuccess } from './redux/actions';


export default function MainRoute() {
    const isAuth = useSelector(state => state.isAuth);
    const [route, setRoute] = React.useState(<AuthNav />)
    const dispatch = useDispatch()
    React.useEffect(() => {
        async function getUser() {
            try {
                const user = await getUserData();
                dispatch(loginSuccess(user))
            } catch (er) {
            }
        }
        getUser()
        setRoute(isAuth ? <AppNav /> : <AuthNav />)
    }, [isAuth])
    return route

}