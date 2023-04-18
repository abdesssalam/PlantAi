import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Image style={{ marginVertical: 10 }} source={require('../assets/LogoBlack.png')} />
            <Text style={{
                width: '90%',
                color: '#000',
                fontSize: 14,
                lineHeight: 26,
                marginVertical: 15,
                fontWeight: '600',
                fontFamily: 'Poppins'
            }}>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type.
            </Text>
            <View style={{
                marginTop: 30,
                alignItems: 'center',

            }}>
                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#000', marginVertical: 20 }}>Contact US</Text>
                <Text style={{ color: '#000', fontSize: 18 }}>+212696-145481</Text>
                <Text style={{ color: '#000', fontSize: 18 }}>contact@plantia.ma</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 25 }}>
                <View style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    backgroundColor: '#4267B2'
                }}>
                    <FontAwesomeIcon icon={faFacebook} color='#fff' size={25} />
                </View>
                <View style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    backgroundColor: '#00BE1E'
                }}>
                    <FontAwesomeIcon icon={faWhatsapp} color='#fff' size={25} />
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDFAF7',
        alignItems: 'center'
    }
})