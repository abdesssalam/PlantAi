import { useState } from 'react';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import FormInput from '../components/FormInput';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import FormHeader from '../components/FormHeader';
import FormFooter from '../components/FormFooter';
import FormBtn from '../components/FormBtn';
import { useDispatch } from 'react-redux';
import { registerService } from '../services/AuthService';
import { LoginFailure, loginSuccess } from '../redux/actions';
// import FormHeader from '../components/FormHeader';
// import FormBtn from '../components/FormBtn';
// import FormFooter from '../components/FormFooter';

function Register({ navigation }) {
    //proprties

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    //actions
    const goToLogin = () => navigation.navigate('Login')
    const handleChnge = (val, key) => {
        let perm = {};
        perm[key] = val
        let u = { ...user, ...perm }
        setUser(u)
    }
    const handleRegister = async () => {
        try {
            const newUser = await registerService(user)
            dispatch(loginSuccess(newUser))
        } catch (error) {
            dispatch(LoginFailure)

        }


    }
    return (
        <ScrollView>
            <FormHeader />

            <View style={{
                width: '95%',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 2,
                marginVertical: 15
            }}>
                <Text >
                    Please enter your account information to
                    register
                </Text>
                <FormInput icon={faUser} placeholder={"First name"} Objkey={'firstName'} value={user.firstName} secure={false} action={handleChnge} />
                <FormInput icon={faUser} placeholder={"Last name"} Objkey={'lastName'} value={user.lastName} secure={false} action={handleChnge} />
                <FormInput icon={faEnvelope} placeholder={"Email"} Objkey={'email'} value={user.email} secure={false} action={handleChnge} />
                <FormInput icon={faLock} placeholder={"Password"} Objkey={'password'} value={user.password} secure={true} action={handleChnge} />
            </View>
            <View style={{
                flex: 1,
                width: '95%',
                alignItems: 'center',
                // justifyContent: 'center',
            }}>
                <FormBtn text={'register'} action={handleRegister} />

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <FormFooter text={'Alread  shave account? '} textAction={'login'} onPress={goToLogin} />
            </View>

        </ScrollView>
    )
}

export default Register


const styles = StyleSheet.create({
    image: {
        // width: 150,
        // height: 150,
        marginVertical: 32,
        // flex: 2,
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    text: {
        // flex: 1,
        fontSize: 32,
        fontWeight: '900',
        color: 'black',
        textAlign: 'center'
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#9b8f8f',
        borderWidth: 2,
        width: '80%',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 8,
    },
    inpuIcon: {
        padding: 10,
        color: '#9b8f8f'
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        marginLeft: 10,
        fontSize: 18,
    },
    btn: {
        backgroundColor: '#2ec980',

        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        width: '75%',
        marginTop: 10
    },
    btnText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
    },
}
)

