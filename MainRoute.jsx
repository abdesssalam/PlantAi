
import React from 'react'
import AuthNav from './navigation/AuthNav';
import AppNav from './navigation/AppNav';
import { useSelector, useDispatch } from "react-redux";

export default function MainRoute() {
    const user = useSelector(state => state.user);

    return user === null ? <AuthNav /> : <AppNav />

}