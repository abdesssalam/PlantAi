import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

export default function FormHeader() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')}
                style={styles.image}
            />
            <Text style={styles.text}>PlantAI</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 32,
        // flex: 2,
        // resizeMode: 'cover',
        // width: '100%',
        // height: '100%'
        // flex: 2,
    },
    text: {
        // flex: 1,
        fontSize: 32,
        fontWeight: '900',
        color: 'black',
        textAlign: 'center'
    },
})
