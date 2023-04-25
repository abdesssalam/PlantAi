import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { loginService } from '../services/AuthService';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const auth = useSelector(state => state.isAuth)

    const handlLogin = () => {
        console.log(email)
        console.log(password)
        console.log(auth)
        console.log('start login')
        loginService(email, password, dispatch)
    }

    useEffect(() => {
        console.log('aaauuth')
        if (auth) {
            navigation.navigate('App')
        }
    }, [auth, navigation])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/LogoBlack.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                {/* <Text style={styles.text}>PlantAI</Text> */}
                <Text style={styles.paragraph}>
                    Please enter your account information to login
                    or connect with Google or Facebook
                </Text>
                <View style={styles.inputWrapper}>
                    <FontAwesomeIcon style={styles.inpuIcon} icon={faEnvelope} />
                    <TextInput style={styles.input} defaultValue={email} placeholder='E-Mail' onChangeText={val => setEmail(val)} />
                </View>
                <View style={styles.inputWrapper}>
                    <FontAwesomeIcon style={styles.inpuIcon} icon={faLock} />
                    <TextInput secureTextEntry={true} style={styles.input} defaultValue={password} placeholder='Password' onChangeText={val => setPassword(val)} />
                </View>
                <TouchableOpacity style={styles.forgetWrapper} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.forget}>forget password ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handlLogin}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.loginWithWrapper}>
                    <Text style={styles.loginWith}> or login with</Text>
                </View>
                <View style={styles.socialWrapper}>
                    <View style={styles.faGoogleWrapper} >
                        <FontAwesomeIcon style={styles.faGoogle} icon={faGoogle} size={30} />
                    </View>
                    <View style={styles.faFacebookWrapper} >
                        <FontAwesomeIcon style={styles.faFacebook} icon={faFacebook} size={30} />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10

                }}>
                    <Text style={{
                        fontSize: 18
                    }}
                    >Don't have account? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                        <Text style={{
                            color: '#269460',
                            fontSize: 18
                        }}>register now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#edfaf7',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    image: {
        width: 150,
        height: 150,
        marginVertical: 22,
    },
    text: {
        fontSize: 32,
        fontWeight: '900',
        color: '#000',
        textAlign: 'center'
    },
    paragraph: {
        fontWeight: '600',
        color: '#000',
        fontSize: 18,
        paddingHorizontal: 16,
        textAlign: 'center',
        lineHeight: 28,
        marginVertical: 16

    },

    btn: {
        backgroundColor: '#2ec980',

        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        width: '75%',
        marginTop: 10
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
    forgetWrapper: {
        width: '80%',
    },
    forget: {
        color: '#269460',
        alignSelf: 'flex-end'

    },
    btnText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
    },
    loginWithWrapper: {
        width: wp('85%'),
        // height: hp('2%'),
        borderBottomWidth: wp('0.25%'),
        borderBottomColor: '#424242',
        justifyContent: 'center',
        marginVertical: 10,
    },
    loginWith: {
        textAlign: 'center',
        // backgroundColor: '#edfaf7',
        fontSize: 18,
        padding: 5,
    },
    socialWrapper: {
        width: wp('40%'),
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
    },
    faGoogleWrapper: {
        backgroundColor: '#db0000',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    faFacebookWrapper: {
        backgroundColor: '#4267b2',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    faGoogle: {
        color: '#fff',
        width: 25

    },
    faFacebook: {
        color: '#fff',
        width: 25

    }


});