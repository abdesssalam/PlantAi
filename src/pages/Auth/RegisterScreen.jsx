import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useState, useRef } from 'react'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux';
import FormHeader from '../../components/Form/FormHeader';
import FormInput from '../../components/Form/FormInput';
import FormBtn from '../../components/Form/FormBtn';
import FormFooter from '../../components/Form/FormFooter';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import routes from '../../constants/routes';
import responsive, { normalizeFont } from '../../constants/responsive';
import { registerService, send_email_verification } from '../../services/AuthService';
import ToastComponent from '../../components/Toast/ToastComponent';
import values from '../../constants/values';
import { LoginFailure, loginSuccess, setToken } from '../../redux/actions'
import { Snackbar } from '@react-native-material/core';


export default function RegisterScreen({ navigation }) {
    const toastRef = useRef(null)
    const [showSnack, setShowSnack] = useState(false)
    const [snackMessage, setSnackMessage] = useState('')
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    //actions
    const goToLogin = () => navigation.navigate(routes.LOGIN)
    const handleChnge = (val, key) => {
        let perm = {};
        perm[key] = val
        let u = { ...user, ...perm }
        setUser(u)
    }
    const handleRegister = async () => {
        let er = false;
        console.log(user)
        Object.keys(user).forEach(k => {

            if (user[k] === '') {
                console.log(user[k])

                er = true
            }
        })
        if (er) {
            setSnackMessage('vous devez remplir tous les champs')
            setShowSnack(true)
            return
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(user.email)) {
            er = true
            setSnackMessage('Email invalide')
            setShowSnack(true)

        }
        if (user.password.length < 8) {
            er = true
            setSnackMessage('le mot de passe doit comporter au moins 8 caractères ')
            setShowSnack(true)
            return
        }
        console.log(er)
        if (er === false) {


            try {
                const newUser = await registerService(user)
                console.log("newUser")
                console.log(newUser)
                console.log("newUser")
                dispatch(loginSuccess(newUser))
                await send_email_verification(newUser.email)
                await navigation.navigate(routes.VERIFY, { email: user.email })
            } catch (error) {
                dispatch(LoginFailure)
            }
        }
    }

    return (
        <ScrollView style={{ flex: 1, height: responsive.WINDOW_HEIGHT }}>
            <ToastComponent ref={toastRef} type={values.TOAST_VALUES.TYPE.DANGER} />
            <FormHeader />

            <View style={{
                width: responsive.WINDOW_WIDTH,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 2,
                marginVertical: normalizeFont(10)
            }}>
                <Text
                    style={{
                        fontFamily: 'Poppins',
                        fontSize: normalizeFont(14),
                        color: '#0d0d0d',
                        textAlign: 'center'
                    }}
                >
                    Veuillez saisir vos informations de compte pour vous inscrire
                </Text>
                <FormInput icon={faUser} placeholder={"Prénome"} Objkey={'firstName'} value={user.firstName} secure={false} action={handleChnge} />
                <FormInput icon={faUser} placeholder={"Nom"} Objkey={'lastName'} value={user.lastName} secure={false} action={handleChnge} />
                <FormInput icon={faEnvelope} placeholder={"Adresse E-mail"} Objkey={'email'} value={user.email} secure={false} action={handleChnge} />
                <FormInput icon={faLock} placeholder={"Mot de passe"} Objkey={'password'} value={user.password} secure={true} action={handleChnge} />
            </View>
            <View style={{
                flex: 1,
                width: responsive.WINDOW_WIDTH,
                alignItems: 'center',
                // justifyContent: 'center',
            }}>
                <FormBtn text="S'inscrire" action={handleRegister} />

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <FormFooter text="Vous avez déjà un compte ?" textAction="connecter" onPress={goToLogin} />
            </View>
            {showSnack &&
                <Snackbar

                    message={snackMessage}
                    style={{ marginTop: normalizeFont(10), width: responsive.WINDOW_WIDTH * 0.90, alignSelf: 'center', backgroundColor: '#EC4F4F' }}
                    action={<TouchableOpacity
                        style={{ backgroundColor: '#efefef', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 15 }}
                        onPress={() => setShowSnack(false)}><Text style={{ color: '#000', fontSize: 14, fontWeight: '700' }}>DISMISS</Text></TouchableOpacity>}
                />
            }
        </ScrollView>
    )
}