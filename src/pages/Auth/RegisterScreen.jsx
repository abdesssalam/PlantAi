import { Text, View, StyleSheet, ScrollView } from 'react-native'
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
import { send_email_verification } from '../../services/AuthService';
import ToastComponent from '../../components/Toast/ToastComponent';
import values from '../../constants/values';


export default function RegisterScreen({ navigation }) {
    const toastRef = useRef(null)
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
        Object.keys(user).forEach(k => {
            console.log(user[k])
            console.log("k")
            if (user[k] === '') {
                er = true

            }
        })
        if (er) {
            toastRef.current.show("vous devez remplir tous les champs", values.TOAST_VALUES.DURATION.LONG)
            return
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(user.email)) {
            toastRef.current.show("Email invalide", values.TOAST_VALUES.DURATION.LONG)
            return
        }
        try {
            const newUser = await registerService(user)
            dispatch(loginSuccess(newUser))
            await send_email_verification(newUser.email)
            await navigation.navigate(routes.VERIFY)
        } catch (error) {
            dispatch(LoginFailure)
        }
    }

    return (
        <ScrollView style={{ flex: 1 }}>
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

        </ScrollView>
    )
}