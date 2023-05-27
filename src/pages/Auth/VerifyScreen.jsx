import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import responsive, { normalizeFont } from '../../constants/responsive'
import COLORS from '../../constants/COLORS'
import routes from '../../constants/routes'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { check_verification_service } from '../../services/AuthService'

export default function VerifyScreen({ navigation }) {
    const [code, setCode] = useState('')
    const route = useRoute();
    console.log(route)
    const handleInputCode = (v) => {
        setCode(v)
    }
    const handle_verify = async () => {
        try {
            const res = await check_verification_service(route.params.email, code)
            if (res === "ok") {
                if (route.params.type === 'password') navigation.navigate(routes.NEW_PASSWORD, { email: route.params.email })
                else navigation.navigate(routes.APP_NAV)
            }
        } catch (er) {
            console.log(er + "eee")
        }
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
            >Vérification</Text>
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
                > Saisir le code de vérification</Text>
                <TextInput
                    value={code}
                    onChangeText={(v) => handleInputCode(v)}
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
                    keyboardType='number-pad'
                    placeholder='XX-XX-XX'

                />
                <TouchableOpacity
                    onPress={handle_verify}
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
                    >vérifier</Text>
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