
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import routes from '../../constants/routes';
import responsive, { normalizeFont } from '../../constants/responsive';


export default function OnBoardingScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/onBoarding.png')}
                resizeMode='cover'
                style={styles.background} >




                <Image
                    source={require('../../assets/logo.png')}
                    resizeMode='contain'
                    style={styles.image}
                />


                <Text style={styles.paragraph}>
                    AGRI-AI est une application mobile qui aide à identifier et diagnostiquer les maladies des plantes.
                    L'application utilise l'intelligence artificielle et des algorithmes d'apprentissage automatique pour analyser les images des plantes et détecter tout signe de maladie ou de dommage.
                </Text>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    navigation.navigate(routes.LOGIN)
                }}>
                    <Text style={styles.text}>Start</Text>
                </TouchableOpacity>


            </ImageBackground>
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
        width: responsive.WINDOW_WIDTH * 0.5,
        height: responsive.WINDOW_WIDTH * 0.5,
        marginVertical: normalizeFont(16),
    },
    text: {
        fontSize: normalizeFont(22),
        fontWeight: '900',
        color: 'white',
        textAlign: 'center'
    },
    paragraph: {
        fontWeight: '600',
        color: 'white',
        fontSize: normalizeFont(16),
        paddingHorizontal: normalizeFont(10),
        textAlign: 'center',
        lineHeight: normalizeFont(23),
        marginVertical: normalizeFont(16),
        fontFamily: 'Poppins'

    },

    btn: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: normalizeFont(16),
        paddingVertical: normalizeFont(8),
        borderRadius: 10,
        width: responsive.WINDOW_WIDTH * 0.75,
    },


});
