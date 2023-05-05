import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { LOGIN_FAILURE, LoginFailure } from '../../redux/actions'
import { userLogout } from '../../services/AuthService'

// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { BlurView } from '@react-native-community/blur'
export default function CustomDrawer(props) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const Logout = async () => {
        try {
            const res = await userLogout()
            dispatch({ type: LOGIN_FAILURE })
        } catch (e) {

        }


    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerheader}>
                    <View style={styles.imageWrapper}>
                        <Image source={require('../../assets/profile.jpg')} style={styles.profileImage} />
                    </View>

                    <View style={styles.info}>
                        <Text style={{
                            fontWeight: '700',
                            color: '#fff',
                            textTransform: 'uppercase'
                        }}
                        >{`${user?.firstName}  ${user?.lastName}`}</Text>
                        <Text style={{
                            fontSize: 14
                        }}>{user?.email}</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={{
                paddingVertical: 15,

            }}>
                <View style={{
                    borderBottomColor: '#fff',
                    height: 5,
                    width: '80%',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    alignSelf: 'center'
                }}></View>
                <TouchableOpacity onPress={Logout} style={styles.btn} >
                    <FontAwesomeIcon

                        icon={faRightFromBracket} size={30} color='#fff' />
                    <Text style={{
                        fontSize: 22,
                        color: '#fff'
                    }}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ec980'
    },
    drawerheader: {
        padding: 15,
        backgroundColor: '#22a969',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        marginBottom: 25
    },
    imageWrapper: {
        width: 60,
        height: 60,
        zIndex: 10,

    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 30,
    },
    info: {
        position: 'absolute',
        paddingLeft: 22,
        paddingRight: 5,
        paddingVertical: 5,
        backgroundColor: '#4eca86',
        left: 55,
        width: '87%',
        borderRadius: 7,


    },
    btn: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'center',
        gap: 10
    }
})