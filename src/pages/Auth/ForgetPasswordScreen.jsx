import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import responsive, { normalizeFont } from '../../constants/responsive'
import COLORS from '../../constants/COLORS'
import routes from '../../constants/routes'


export default function ForgetPasswordScreen({ navigation }) {

    const send_OTP_code = () => {
        navigation.navigate(routes.VERIFY)
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: normalizeFont(22),
                    color: '#000',
                    fontWeight: '600',
                    fontFamily: 'Poppins',
                    marginTop: normalizeFont(10)
                }}
            >Mot de passe oublié</Text>
            <View style={{
                width: '80%',
                marginTop: responsive.WINDOW_HEIGHT * 0.25,

            }}>
                <Text
                    style={{
                        color: '#000',
                        fontSize: normalizeFont(14),
                        fontFamily: 'Poppins',
                        marginBottom: normalizeFont(12)
                    }}
                > Entrez votre adresse e-mail</Text>
                <TextInput
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        fontSize: normalizeFont(14),
                        color: '#000',
                        paddingLeft: normalizeFont(10),
                        paddingVertical: normalizeFont(10),
                        borderColor: '#DDD',
                        borderWidth: 2
                    }}
                    placeholder='example@agriai.ma' />
                <TouchableOpacity
                    onPress={send_OTP_code}
                    style={{
                        backgroundColor: COLORS.GREEN_LIGHT,
                        width: responsive.WINDOW_WIDTH * 0.50,
                        paddingHorizontal: normalizeFont(10),
                        paddingVertical: normalizeFont(5),
                        marginTop: normalizeFont(10),
                        borderRadius: 10
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: normalizeFont(22),
                            textAlign: 'center'
                        }}
                    >Envoyer</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => { navigation.navigate(routes.LOGIN) }}
                style={{
                    width: '80%',
                    marginTop: normalizeFont(16)
                }}
            >
                <Text
                    style={{
                        color: COLORS.LIGHT_BLACK,
                        fontSize: normalizeFont(12)

                    }}
                >Retour à la connexion</Text>
            </TouchableOpacity>
        </View>
    )
}