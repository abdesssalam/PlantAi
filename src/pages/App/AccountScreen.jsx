import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import responsive, { normalizeFont } from '../../constants/responsive';
import ImageCropPicker from 'react-native-image-crop-picker';
import urls from '../../constants/urls';
import { changeProfilePicture, editUserService } from '../../services/AuthService';
import { loginSuccess } from '../../redux/actions';
import routes from '../../constants/routes';




const DrawFormItem = ({ text, val, onChange, objKey }) => {
    const handleChange = (val) => {
        console.log(objKey)
        onChange(val, objKey)

    }
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
                onChangeText={handleChange}
                style={{
                    fontSize: normalizeFont(14),
                    lineHeight: normalizeFont(18),
                    width: '100%',
                    paddingVertical: normalizeFont(6)

                }}

                value={val} secureTextEntry={objKey.toLowerCase() == 'password'} />
        </View>
    )
}


export default function AccountScreen({ navigation }) {
    const userInfo = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [user, setUser] = React.useState({ ...userInfo, ...{ password: '' } })


    const handleChnge = (val, key) => {
        let perm = {};
        perm[key] = val
        let u = { ...user, ...perm }
        setUser(u)

    }
    const reset_user_info = () => {
        navigation.navigate(routes.HOME_NAV)
        setUser(userInfo)
    }
    const update_user_info = async () => {
        console.log("updating user")
        const UpdatedUser = await editUserService(user);
        dispatch(loginSuccess(UpdatedUser))
        console.log("updated")
        console.log(UpdatedUser)
        // console.log(user)
    }
    const handleChangeProfile = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(img => {
            const formData = new FormData();
            let y = new Date()
            let name = `image-${userInfo.id}-${"" + y.getDay() + y.getMonth() + y.getFullYear() + y.getUTCMilliseconds()}`
            formData.append('photo', {
                uri: img.path,
                name: name,
                type: img.mime,
            })
            console.log(formData)
            return formData
        }).then(formData => changeProfilePicture(formData))
            .then(path => {
                dispatch(loginSuccess({ ...userInfo, ...{ img: path.img } }))
                setUser({ ...userInfo, ...{ img: path.img } })
                console.log(path.img)
                console.log(user.img)
            }).catch(er => console.log(er))
    }



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
        <ScrollView style={{ flex: 1 }}>
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
                    <HeaderActionItem text='annuler' action={reset_user_info} />
                    <HeaderActionItem text='modifier' action={() => { }} />
                    <HeaderActionItem text='enregistrer' action={update_user_info} />

                </View>
                <View style={{ marginBottom: responsive.WINDOW_HEIGHT * 0.05, alignItems: 'center' }}>
                    <Image source={user.img ? { uri: urls.USER_URL + user.img } : require('../../assets/no-profile.png')}
                        style={{
                            width: responsive.WINDOW_WIDTH * 0.30,
                            height: responsive.WINDOW_WIDTH * 0.30,
                            borderRadius: responsive.WINDOW_WIDTH * 0.30,
                            marginBottom: responsive.WINDOW_HEIGHT * 0.01,

                        }} />
                    <TouchableOpacity onPress={handleChangeProfile}>
                        <Text
                            style={{
                                fontSize: normalizeFont(14),
                                // textDecorationLine: 'underline',
                                paddingBottom: 5,
                                borderBottomColor: '#4267B2',
                                borderBottomWidth: 1,
                                color: '#4267B2'
                            }}
                        >change profile picture</Text>
                    </TouchableOpacity>
                </View>

                <DrawFormItem text='prénom' val={user.firstName} objKey='firstName' onChange={handleChnge} />
                <DrawFormItem text='nom' val={user.lastName} objKey='lastName' onChange={handleChnge} />
                <DrawFormItem text='address email' val={user.email} objKey='email' onChange={handleChnge} />
                <DrawFormItem text='mot de pass' val={user.password} objKey='password' onChange={handleChnge} />

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        height: responsive.WINDOW_HEIGHT
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