
import React from 'react'


import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function OnBoardingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/planetbg2.jpg')}
                resizeMode='cover'
                style={styles.background} >

                <View style={styles.overleyView}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>PlantAI</Text>

                    <Text style={styles.paragraph}>
                        PlantAI is a mobile application that helps
                        identify and diagnose plant diseases. The app
                        works by using artificial intelligence and
                        machine learning algorithms to analyze
                        images of plants and detect any signs of
                        disease or damage
                    </Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>Start</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
    },
    background: {
        flex: 1,

    },
    image: {
        width: 250,
        height: 250,
        marginVertical: 32,
    },
    text: {
        fontSize: 32,
        fontWeight: '900',
        color: 'white',
        textAlign: 'center'
    },
    paragraph: {
        fontWeight: '600',
        color: 'white',
        fontSize: 22,
        paddingHorizontal: 10,
        textAlign: 'justify',
        lineHeight: 28,
        marginVertical: 25

    },
    overleyView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(0,0, 0, 0.5)',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        width: '75%',
        // alignContent: 'center'

    },
    // btnText:{
    //   textAlign:''
    // }

});
