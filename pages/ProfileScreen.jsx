import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock, faEnvelope, faPhone, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'


const DrawHeader = ({ user }) => {
    user = { ...user, ...{ username: 'wehelp' } }
    return (
        <View style={{
            width: '95%',
            backgroundColor: '#2ec980',
            alignItems: 'center',
            padding: 10,
            paddingTop: 30,

            position: 'relative',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            elevation: 10

        }}>
            <View
                style={{
                    width: 90,
                    height: 90,
                    borderRadius: 40,
                    position: 'absolute',
                    top: -60,
                    left: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 20,
                    shadowColor: '#202020'
                }}
            >
                <Image source={require('../assets/profile.jpg')}
                    style={{ width: '95%', height: '95%', borderRadius: 40 }}
                />
            </View>

            <View style={{ marginLeft: 10, alignItems: 'center', width: '100%' }}>
                <Text
                    style={{ color: '#fff', fontSize: 26, fontWeight: '600', textTransform: 'capitalize', marginTop: 5, textAlign: 'center' }}
                >{`${user?.firstName} ${user?.lastName}`}</Text>
                <Text
                    style={{ color: '#efefef', fontSize: 22, fontWeight: '600', textTransform: 'capitalize', textAlign: 'center' }}
                >@{user?.username}</Text>

            </View>
        </View>
    )
}

const DrawBodyItem = ({ Itemkey, val, icon }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 25,
                paddingHorizontal: 10,
                borderBottomWidth: 0.5,
                borderBottomColor: '#666',


            }}
        >
            <FontAwesomeIcon icon={icon} size={30} style={{ marginRight: 15 }} color='#666' />
            <Text style={{
                fontSize: 18,
                textTransform: 'capitalize',
                fontWeight: '600',
                color: '#3a3a3a',
                fontFamily: 'roboto'


            }}>{Itemkey} : </Text>
            <Text style={{ fontSize: 20 }}>{val} </Text>
        </View>
    )
}
const DrawAccountBody = ({ user }) => {

    return (
        <View
            style={{
                width: '95%',
                // marginTop: 10,
                backgroundColor: '#fff',
                elevation: 10,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,

            }}
        >
            <DrawBodyItem Itemkey={'Name'} val={`${user.firstName} ${user.lastName}`} icon={faUser} />
            <DrawBodyItem Itemkey={'email'} val={user.email} icon={faEnvelope} />
            <DrawBodyItem Itemkey={'Phone'} val={'052297854'} icon={faPhone} />
            <DrawBodyItem Itemkey={'Joined In'} val={'25/04/2022'} icon={faClock} />


        </View>
    )
}
export default function ProfileScreen() {
    const user = useSelector(state => state.user)
    return (
        <View style={styles.container} >
            <DrawHeader user={user} />

            <DrawAccountBody user={user} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDFAF7',
        alignItems: 'center',
        justifyContent: 'center'
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