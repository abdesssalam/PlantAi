import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import urls from '../../constants/urls';
import COLORS from '../../constants/COLORS';
import responsive, { normalizeFont } from '../../constants/responsive';
import routes from '../../constants/routes';
import { createPlant, getSingleItem } from '../../services/PlantsService';
import { disessData } from '../../data/disessData';

const FirstResultScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    let results = [
        route.params.data['result_0'],
        route.params.data['result_1'],
        route.params.data['result_2'],
    ]
    results = results.map(res => {
        let plant = getSingleItem(res.Name).general.fr_name;
        res = { ...res, ...{ fr_name: plant } }
        if (res.Condition !== 'Healthy') {
            let fr_state = disessData.Apple.Condition.Rot.fr_name;
            res = { ...res, ...{ fr_state: fr_state } }
        }
        return res;
    })

    let item = results[0]
    const image_url = route.params.data['image_url']
    const hanlde_press_no = () => {
        navigation.navigate(routes.CHOOSE_SCREEN, { data: route.params.data })
    }
    const handle_press_yes = () => {
        createPlant(item.Name, item.Condition, image_url)
        let item2 = getSingleItem(item.Name);
        item2 = { ...item2, ...item }
        item2 = { ...item2, ...{ image_url: image_url } }
        navigation.reset(
            {
                index: 1,
                routes: [
                    { name: routes.PRE_CAMERA_SCREEN },
                    {
                        name: routes.DETAILS,
                        params: { item: item2 }
                    },

                ],
                // key: null
            }

        )
    }
    return (
        <View style={{
            flex: 1,
            height: responsive.WINDOW_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image
                source={{ uri: urls.AI_API + image_url }}

                style={{
                    borderRadius: 10,
                    width: '90%',
                    height: '20%',
                    marginTop: normalizeFont(10),
                    marginBottom: normalizeFont(15),

                }}
                resizeMode='cover'
            />
            <View style={{
                marginBottom: normalizeFont(10),
                elevation: 10,
                width: '90%',
                backgroundColor: item.Condition === 'Healthy' ? COLORS.GREEN_LIGHT : '#EC4F4F',
                borderRadius: 10,
                paddingVertical: normalizeFont(10)
            }}>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: normalizeFont(16),
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        marginLeft: normalizeFont(10),
                        width: '100%',
                        marginBottom: normalizeFont(8)
                    }}
                >Nom de la plante :
                    <Text
                        style={{
                            color: '#efefef',
                            fontSize: normalizeFont(14),
                            fontWeight: '500',
                            fontFamily: 'Poppins',
                            marginLeft: normalizeFont(10)
                        }}
                    >
                        {' ' + item.fr_name}
                    </Text>
                </Text>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: normalizeFont(16),
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        marginLeft: normalizeFont(10),
                        width: '100%'
                    }}
                >État de santé :
                    <Text
                        style={{
                            color: '#ddd',
                            fontSize: normalizeFont(14),
                            fontWeight: '500',
                            fontFamily: 'Poppins',
                            marginLeft: normalizeFont(10)
                        }}
                    >
                        {item.Condition === 'Healthy' ? ' En bonne santé' : ' ' + item.fr_state.replace("_", " ")}
                    </Text>
                </Text>

            </View>
            <Text
                style={{
                    fontSize: normalizeFont(16),
                    color: COLORS.LIGHT_BLACK
                }}>Is it correct ?</Text>
            <View style={{
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-between',
                marginTop: normalizeFont(12)
            }}>
                <TouchableOpacity
                    style={{
                        width: '40%',
                        backgroundColor: COLORS.GREEN_LIGHT,
                        paddingVertical: normalizeFont(16),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15

                    }} onPress={handle_press_yes}>
                    <Text style={{ color: '#fff', fontSize: normalizeFont(22) }}   >yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '40%',
                        backgroundColor: '#EC4F4F',
                        paddingVertical: normalizeFont(16),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15

                    }} onPress={hanlde_press_no}>
                    <Text style={{ color: '#fff', fontSize: normalizeFont(22) }} >no</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FirstResultScreen