import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { useState } from 'react'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux';
import FormHeader from '../../components/Form/FormHeader';
import FormInput from '../../components/Form/FormInput';
import FormBtn from '../../components/Form/FormBtn';
import FormFooter from '../../components/Form/FormFooter';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import routes from '../../constants/routes';


export default function RegisterScreen({ navigation }) {
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