import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { loginService } from '../../services/AuthService';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, Button } from '@react-native-material/core';
import { LoginFailure, loginSuccess, setToken } from '../../redux/actions'
import routes from '../../constants/routes';
import responsive, { normalizeFont } from '../../constants/responsive';
export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [showSnack, setShowSnack] = useState(false)

    const handlLogin = async () => {
        try {
            const data = await loginService(email, password);

            dispatch(loginSuccess(data.user))
            dispatch(setToken(data.token))
            navigation.navigate(routes.APP_NAV, { screen: routes.HOME_NAV })

        } catch (err) {

            dispatch(LoginFailure())
            setShowSnack(true)
            setTimeout(() => {
                setShowSnack(false)
            }, 3000)
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/LogoBlack.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                {/* <Text style={styles.text}>PlantAI</Text> */}
                <Text style={styles.paragraph}>
                    Veuillez saisir vos informations de compte pour vous connecter
                </Text>
                <View style={styles.inputWrapper}>
                    <FontAwesomeIcon style={styles.inpuIcon} icon={faEnvelope} />
                    <TextInput style={styles.input} defaultValue={email} placeholder='Adresse E-mail' placeholderTextColor="#6666" onChangeText={val => setEmail(val)} />
                </View>
                <View style={styles.inputWrapper}>
                    <FontAwesomeIcon style={styles.inpuIcon} icon={faLock} />
                    <TextInput secureTextEntry={true} style={styles.input} defaultValue={password} placeholder='mot de passe' placeholderTextColor="#6666" onChangeText={val => setPassword(val)} />
                </View>
                <TouchableOpacity
                    style={{
                        width: responsive.WINDOW_WIDTH * 0.80,
                    }}
                    onPress={() => navigation.navigate(routes.FORGET)}>
                    <Text
                        style={{
                            color: '#269460',
                            alignSelf: 'flex-end',
                            fontSize: normalizeFont(12)
                        }}
                    > mot de passe oublié ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handlLogin}>
                    <Text style={styles.btnText}>connexion</Text>
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    width: responsive.WINDOW_WIDTH * 0.80,


                }}>
                    <Text style={{
                        fontSize: normalizeFont(12),
                        color: '#000',
                        fontFamily: 'Poppins'
                    }}
                    >vous n'avez pas de compte ? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate(routes.REGISTER) }}>
                        <Text style={{
                            color: '#269460',
                            fontSize: normalizeFont(12),
                            fontFamily: 'Poppins',
                        }}> s'inscrire maintenant</Text>
                    </TouchableOpacity>
                </View>
                {showSnack && <Snackbar

                    message='inccorect'
                    style={{ position: "absolute", start: 16, end: 16, bottom: 20 }}
                    action={<TouchableOpacity
                        style={{ backgroundColor: '#efefef', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 15 }}
                        onPress={() => setShowSnack(false)}><Text style={{ color: '#000', fontSize: 14, fontWeight: '700' }}>DISMISS</Text></TouchableOpacity>}
                />}


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#edfaf7',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    image: {
        width: responsive.WINDOW_WIDTH * 0.45,
        height: responsive.WINDOW_WIDTH * 0.45,
        marginVertical: normalizeFont(12),
    },
    paragraph: {
        fontWeight: '600',
        color: '#000',
        fontSize: normalizeFont(14),
        paddingHorizontal: normalizeFont(10),
        textAlign: 'center',
        lineHeight: normalizeFont(22),
        marginVertical: normalizeFont(14)

    },

    btn: {
        backgroundColor: '#2ec980',
        paddingVertical: normalizeFont(10),
        borderRadius: 10,
        width: responsive.WINDOW_WIDTH * 0.75,
        marginTop: normalizeFont(8)
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#9b8f8f',
        borderWidth: 2,
        width: responsive.WINDOW_WIDTH * 0.80,
        paddingHorizontal: normalizeFont(10),
        borderRadius: 15,
        marginVertical: normalizeFont(6),
    },
    inpuIcon: {
        padding: normalizeFont(8),
        color: '#9b8f8f'
    },
    input: {
        paddingTop: normalizeFont(8),
        paddingLeft: 0,
        color: '#424242',
        marginLeft: normalizeFont(10),
        fontSize: normalizeFont(14),
        width: '90%',

    },
    btnText: {
        color: 'white',
        fontSize: normalizeFont(20),
        fontWeight: '600',
        textAlign: 'center',
    },



});