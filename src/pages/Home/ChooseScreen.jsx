import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import responsive, { normalizeFont } from '../../constants/responsive';
import COLORS from '../../constants/COLORS';
import { createPlant, getSingleItem } from '../../services/PlantsService';
import routes from '../../constants/routes';
import urls from '../../constants/urls';
import { disessData } from '../../data/disessData';
export default function ChooseScreen() {
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
        if (res.Condition === 'Healthy') {
            let fr_state = disessData.Apple.Condition.Rot.fr_name;
            res = { ...res, ...{ fr_state: fr_state } }
        }
        console.log(res)
        return res;
    })
    const image_url = route.params.data['image_url']
    const handlePress = (item) => {
        console.log("saving the plant")
        createPlant(item.Name, item.Condition, image_url)
        let item2 = getSingleItem(item.Name);
        item2 = { ...item2, ...item }
        item2 = { ...item2, ...{ image_url: image_url } }
        console.log(item2)
        console.log("saving the plant")
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
        //navigation.navigate(routes.DETAILS, { item: item2 })
    }


    return (
        <View style={{
            flex: 1,
            height: responsive.WINDOW_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Image source={{ uri: urls.AI_API + image_url }} style={{
                borderRadius: 10,
                width: '90%',
                height: '20%',
                marginTop: normalizeFont(10),
                marginBottom: normalizeFont(15),

            }}
                resizeMode='cover'
            />
            <Text
                style={{
                    color: '#000',
                    fontSize: normalizeFont(22),
                    fontWeight: '600',
                    fontFamily: 'Poppins',
                    marginBottom: normalizeFont(12)
                }}
            >Sélectionner le bon résultat </Text>
            <ScrollView style={{ flex: 1, width: '90%' }}>
                {results.map(item => <DrawChooseCard item={item} key={item.Condition + item.Name} handlePress={handlePress} />)}
                {/* <FlatList horizontal style={{ width: '95%' }} data={results} renderItem={({ item }) => <DrawChooseCard item={item} key={item.Condition} handlePress={handlePress} />} /> */}
            </ScrollView>




        </View>
    )
}

const DrawChooseCard = ({ item, handlePress }) => {
    return (
        <TouchableOpacity
            // onPress={() => { handlePress(item) }}
            onPress={() => { }}
            style={{
                marginBottom: normalizeFont(10),
                elevation: 10,
                width: '100%',
                backgroundColor: item.Condition === 'Healthy' ? COLORS.GREEN_LIGHT : '#EC4F4F',
                borderRadius: 10,
                paddingVertical: normalizeFont(10)
            }}
        >
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
                    {item.Condition !== 'Healthy' ? ' En bonne santé' : ' ' + item.fr_state.replace("_", " ")}
                </Text>
            </Text>

        </TouchableOpacity>
    )

}