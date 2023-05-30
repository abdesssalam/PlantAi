import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'

import responsive, { normalizeFont } from '../../constants/responsive';
import COLORS from '../../constants/COLORS';
import { get_all_plants } from '../../services/PlantsService';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
export default function PreCameraScreen() {
    const [choix, setChoix] = useState('')
    const navigation = useNavigation();


    let choix1 = [
        {
            text: 'Fruit',
            icon: faApple
        },
        {
            text: 'Feuille',
            icon: faLeaf
        }

    ]
    let plants = get_all_plants();
    console.log("plants")
    console.log(plants[0])
    console.log("plants")
    const handle_press_choix_1 = (text) => {
        if (text === choix1[0].text) {
            navigation.navigate(routes.CAMERA, { type: 'fruit' })
            console.log('to camrea screen')

        } else {
            setChoix(text)
        }

    }
    const handle_press_choix_2 = (text) => {
        setChoix("")
        text = text.replace(" ", "-")
        navigation.navigate(routes.CAMERA, { type: 'leaf', name: text })

    }


    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                paddingVertical: normalizeFont(10),
                backgroundColor: '#fff',
                justifyContent: 'center'
            }}
        >

            <ScrollView style={{ width: '100%' }}>
                <Text
                    style={{
                        color: '#000',
                        fontSize: normalizeFont(16),
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        marginBottom: normalizeFont(12),
                        textAlign: 'center'
                    }}
                >Cette étape pour obtenir des résultats plus spécifiques </Text>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: "wrap",
                    justifyContent: 'center',
                    width: '100%',

                }}>
                    {choix === '' ?
                        <View style={{ alignItems: 'center' }}>

                            <Image source={require('../../assets/Focus-amico.png')} style={{
                                width: responsive.WINDOW_WIDTH * 0.75, height: responsive.WINDOW_WIDTH * 0.75
                            }} />
                            <View style={{ flexDirection: 'row' }}>

                                {choix1.map(item => <DrawChooseCard key={item.text} val={item.text} text={item.text} icon={item.icon} handlePress={handle_press_choix_1} />)}
                            </View>
                        </View>
                        :

                        plants.map(item => <DrawFruitCard key={item.text} val={item.name} text={item.fr_name} img={item.img} handlePress={handle_press_choix_2} />)}
                </View>
            </ScrollView>
        </View>
    )
}

const DrawFruitCard = ({ text, handlePress, val, img }) => {
    return (
        <TouchableOpacity
            onPress={() => { handlePress(val) }}
            style={{
                marginBottom: normalizeFont(10),
                elevation: 10,
                width: responsive.WINDOW_WIDTH * 0.40,
                height: responsive.WINDOW_WIDTH * 0.35,
                backgroundColor: COLORS.GREEN_LIGHT,
                borderRadius: 10,
                marginHorizontal: normalizeFont(15),
                alignItems: 'center',


            }}
        >
            <Image source={img} style={{
                borderRadius: 10,
                width: '95%',
                height: '40%',
                marginTop: normalizeFont(10),
                marginBottom: normalizeFont(15)
            }} />
            <Text
                style={{
                    color: '#fff',
                    fontSize: normalizeFont(16),
                    fontWeight: '600',
                    fontFamily: 'Poppins'
                }}
            >{text}</Text>
        </TouchableOpacity>
    )

}
const DrawChooseCard = ({ text, handlePress, val, icon }) => {
    return (
        <TouchableOpacity
            onPress={() => { handlePress(text) }}
            style={{
                marginBottom: normalizeFont(10),
                width: responsive.WINDOW_WIDTH * 0.40,
                height: responsive.WINDOW_WIDTH * 0.40,
                marginHorizontal: normalizeFont(15),
                backgroundColor: '#1DC662',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: 15
            }}
        >
            <FontAwesomeIcon icon={icon} color='#fff' size={normalizeFont(55)} />
            <Text
                style={{
                    color: '#fff',
                    fontSize: normalizeFont(30),
                    fontWeight: '600',
                    fontFamily: 'Poppins',

                }}
            >{text}</Text>
        </TouchableOpacity>
    )

}