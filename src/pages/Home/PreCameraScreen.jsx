import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useState } from 'react'
import responsive, { normalizeFont } from '../../constants/responsive';
import COLORS from '../../constants/COLORS';
import { get_all_plants } from '../../services/PlantsService';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
export default function PreCameraScreen() {
    const [choix, setChoix] = useState('')
    const navigation = useNavigation();



    let choix1 = [
        {
            text: 'Fruit',
            img: require('../../assets/fruit-logo.png')
        },
        {
            text: 'Feuille',
            img: require('../../assets/leaf-logo.png')
        }

    ]
    let plants = get_all_plants();
    console.log(plants)
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
                backgroundColor: '#f4f4f4',
                justifyContent: 'center'
            }}
        >

            <ScrollView style={{ width: '100%' }}>
                <Text
                    style={{
                        color: '#000',
                        fontSize: normalizeFont(22),
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        marginBottom: normalizeFont(12),
                        textAlign: 'center'
                    }}
                >choisir </Text>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: "wrap",
                    justifyContent: 'center',
                    width: '100%',

                }}>
                    {choix === '' ?
                        choix1.map(item => <DrawChooseCard key={item.text} val={item.text} text={item.text} img={item.img} handlePress={handle_press_choix_1} />)
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
const DrawChooseCard = ({ text, handlePress, val, img }) => {
    return (
        <TouchableOpacity
            onPress={() => { handlePress(text) }}
            style={{
                marginBottom: normalizeFont(10),
                width: responsive.WINDOW_WIDTH * 0.80,
                height: responsive.WINDOW_WIDTH * 0.30,
                marginHorizontal: normalizeFont(15),
                backgroundColor: '#fff'
            }}
        >
            <View style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                flexDirection: 'row',
                paddingLeft: normalizeFont(20),
                borderRadius: 10,
                // elevation: 10,
                borderColor: '#000',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                borderWidth: 0.5,


            }}>


                <Image
                    resizeMode='contain'
                    source={img} style={{
                        width: '20%',
                        height: '60%',
                    }}

                />
                <Text
                    style={{
                        color: COLORS.LIGHT_BLACK,
                        fontSize: normalizeFont(30),
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        marginLeft: normalizeFont(22)
                    }}
                >{text}</Text>
            </View>
        </TouchableOpacity>
    )

}