import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput, PixelRatio } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import responsive, { normalizeFont } from '../../constants/responsive';




const DrawFormItem = ({ text, val }) => {

    return (
        <View
            style={{
                width: responsive.WINDOW_WIDTH * 0.7,
                alignItems: 'flex-start',
                marginTop: responsive.WINDOW_HEIGHT * 0.02,
                borderBottomColor: '#666',
                borderBottomWidth: 0.5,
                backgroundColor: '#fff'
            }}
        >
            <Text
                style={{
                    // color: '#bbba',
                    color: '#93a0ac',
                    textTransform: 'uppercase',
                    fontSize: normalizeFont(14),
                    lineHeight: normalizeFont(18)
                }}
            >{text} :</Text>
            <TextInput
                style={{
                    fontSize: normalizeFont(14),
                    lineHeight: normalizeFont(18),
                    width: '100%',
                    paddingVertical: normalizeFont(6)

                }}

                value={val} secureTextEntry={text.toLowerCase() == 'password'} />
        </View>
    )
}


export default function AccountScreen() {
    const userInfo = useSelector(state => state.user)
    const [user, setUser] = React.useState(userInfo)
    const HeaderActionItem = ({ text, action }) => {
        return (
            <TouchableOpacity onPress={action}
                style={{
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        textTransform: 'capitalize',
                        color: '#000'

                    }}>{text}</Text>
            </TouchableOpacity>)
    }
    return (
        <View style={styles.container} >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: responsive.WINDOW_WIDTH,
                    shadowColor: '#000',
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 1,
                    marginBottom: responsive.WINDOW_HEIGHT * 0.03

                }}
            >
                <HeaderActionItem text='annuler' action={() => { }} />
                <HeaderActionItem text='modifier' action={() => { }} />
                <HeaderActionItem text='enregistrer' action={() => { }} />

            </View>
            <Image source={require('../../assets/profile.jpg')}
                style={{
                    width: responsive.WINDOW_WIDTH * 0.30,
                    height: responsive.WINDOW_WIDTH * 0.30,
                    borderRadius: responsive.WINDOW_WIDTH * 0.30,
                    marginBottom: responsive.WINDOW_HEIGHT * 0.05

                }} />
            <DrawFormItem text='prénom' val={user.firstName} />
            <DrawFormItem text='nom' val={user.lastName} />
            <DrawFormItem text='address email' val={user.email} />
            <DrawFormItem text='mot de pass' val={user.password} />

        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderColor: '#666',
        backgroundColor: '#f4f9f5',
        borderRadius: 10,
        marginVertical: 10,


    },
    itemKey: {
        fontSize: 18,
        textTransform: 'capitalize',
        color: '#000',
        fontWeight: '600'
    },
    itemValue: {
        fontSize: 18,

        color: '#001f',
        fontWeight: '400'
    }
})