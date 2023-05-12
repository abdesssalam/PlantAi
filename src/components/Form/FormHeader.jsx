import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import responsive, { normalizeFont } from '../../constants/responsive'

export default function FormHeader() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/LogoWhite.png')}
                style={styles.image}
            />
            <Text style={styles.text}>AGRI-AI.MA</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: responsive.WINDOW_WIDTH * 0.25,
        height: responsive.WINDOW_WIDTH * 0.25,
        marginVertical: normalizeFont(10),
    },
    text: {
        // flex: 1,
        fontSize: normalizeFont(24),
        fontWeight: '900',
        color: 'black',
        textAlign: 'center'
    },
})
