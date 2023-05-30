import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { normalizeFont } from '../../constants/responsive'

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Image style={{ marginVertical: 10 }} source={require('../../assets/LogoBlack.png')} />
            <Text style={{
                width: '90%',
                color: '#000',
                fontSize: 14,
                lineHeight: 26,
                marginVertical: normalizeFont(8),
                fontWeight: '600',
                fontFamily: 'Poppins'
            }}>
                Notre application de détection des maladies chez les plantes est un outil essentiel pour les agriculteurs et les jardiniers souhaitant maintenir la santé de leurs cultures. Grâce à une technologie avancée de vision par ordinateur et d'intelligence artificielle, cette application permet d'identifier rapidement et précisément les maladies présentes sur les plantes.
            </Text>
            <View style={{

                alignItems: 'center',

            }}>
                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#000', marginVertical: normalizeFont(12) }}>Contactez-nous</Text>
                <Text style={{ color: '#000', fontSize: normalizeFont(14) }}>+212696-145481</Text>
                <Text style={{ color: '#000', fontSize: normalizeFont(14) }}>contact@agri-ai.ma</Text>
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