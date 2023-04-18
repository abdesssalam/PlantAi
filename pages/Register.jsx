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

// import FormHeader from '../components/FormHeader';
// import FormBtn from '../components/FormBtn';
// import FormFooter from '../components/FormFooter';

function Register() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
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
                <FormInput icon={faUser} placeholder={"First name"} value={user.firstName} secure={false} />
                <FormInput icon={faUser} placeholder={"Last name"} value={user.lastName} secure={false} />
                <FormInput icon={faEnvelope} placeholder={"Email"} value={user.email} secure={false} />
                <FormInput icon={faLock} placeholder={"Password"} value={user.password} secure={true} />
            </View>
            <View style={{
                flex: 1,
                width: '95%',
                alignItems: 'center',
                // justifyContent: 'center',
            }}>
                <FormBtn text={'register'} />

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <FormFooter text={'Alread  shave account? '} textAction={'login'} onPress={() => { }} />
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

