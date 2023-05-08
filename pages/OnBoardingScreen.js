import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'


import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawSplashScreen } from './SplashScreen';

const SHOW_ON_BOARDING_SCREEN = "SHOW_ON_BOARDING_SCREEN";
export default function OnBoardingScreen({ navigation }) {
    const [showScreen, setshowScreen] = React.useState(false)
    React.useEffect(() => {
        async function isShowed() {
            const show = await AsyncStorage.getItem(SHOW_ON_BOARDING_SCREEN)
            console.log(show)
            if (show) {

                navigation.navigate('Login')
            } else {
                console.log("alredy")
                setshowScreen(true)
                await AsyncStorage.setItem(SHOW_ON_BOARDING_SCREEN, "true")
            }
        }
        isShowed()
    }, [])

    return (
        <View style={styles.container}>
            {showScreen ?
                <ImageBackground
                    source={require('../assets/onBoarding.png')}
                    resizeMode='cover'
                    style={styles.background} >




                    <Image
                        source={require('../assets/LogoWhite.png')}
                        resizeMode='contain'
                        style={styles.image}
                    />


                    <Text style={styles.paragraph}>
                        AGRI-AI is a mobile application that helps
                        identify and diagnose plant diseases. The app
                        works by using artificial intelligence and
                        machine learning algorithms to analyze
                        images of plants and detect any signs of
                        disease or damage
                    </Text>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text style={styles.text}>Start</Text>
                    </TouchableOpacity>


                </ImageBackground>
                : <DrawSplashScreen />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250,
        marginVertical: 16,
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

    btn: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        width: '75%',


    },


});
