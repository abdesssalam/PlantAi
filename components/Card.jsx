import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'


//264 131
export default function Card({ text, width, height, imgSrc }) {
    return (

        <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            source={imgSrc} style={{ width: width, height: height, marginVertical: 10, marginRight: 8 }}>
            <View style={[styles.overley, {
                justifyContent: 'flex-end',
                alignItems: 'center'
            }]}>
                <Text style={{ color: '#fff', width: '80%', fontSize: 20, margin: 8 }}>{text}</Text>
            </View>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    overley: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(0,0, 0, 0.4)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'Poppins'
    }
})