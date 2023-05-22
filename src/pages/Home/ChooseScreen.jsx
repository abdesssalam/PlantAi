import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import responsive, { normalizeFont } from '../../constants/responsive';
import COLORS from '../../constants/COLORS';
import { createPlant, getSingleItem } from '../../services/PlantsService';
import routes from '../../constants/routes';
export default function ChooseScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    const results = [
        route.params.data['result_0'],
        route.params.data['result_1'],
        route.params.data['result_2'],
    ]
    const image_url = route.params.data['image_url']
    console.log(results[0])
    const handlePress = (item) => {
        console.log("saving the plant")
        createPlant(item.Name, item.Condition, image_url)
        item = { ...item, ...image_url }
        item = { ...item, ...getSingleItem(item.Name) }
        console.log("saving the plant")
        navigation.navigate(routes.DETAILS, { item: item })
    }
    function getUniqueNames(arr) {
        const uniqueNamesSet = new Map();

        arr.forEach(obj => {
            console.log("obj")
            console.log(obj)
            const { Name, Condition, Type } = obj
            console.log(Condition)
            uniqueNamesSet.set(Name, obj);
        });

        return Array.from(uniqueNamesSet.values());
    }
    const res_filtres = getUniqueNames(results)
    console.log("filtred")
    console.log(res_filtres)
    return (
        <View style={{
            flex: 1,
            height: responsive.WINDOW_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                width: responsive.WINDOW_WIDTH,
                height: responsive.WINDOW_HEIGHT * 0.45,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        color: '#000',
                        fontSize: normalizeFont(22),
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        marginBottom: normalizeFont(12)
                    }}
                >Choiser le bon choix</Text>
                <ScrollView horizontal style={{ flex: 1 }}>
                    {res_filtres.map(item => <DrawChooseCard item={item} key={item.Condition} handlePress={handlePress} img_url={image_url} />)}
                    {/* <FlatList horizontal style={{ width: '95%' }} data={results} renderItem={({ item }) => <DrawChooseCard item={item} key={item.Condition} handlePress={handlePress} />} /> */}
                </ScrollView>
            </View>



        </View>
    )
}

const DrawChooseCard = ({ item, handlePress, img_url }) => {
    return (
        <TouchableOpacity
            onPress={() => { handlePress(item) }}
            style={{
                marginBottom: normalizeFont(10),
                elevation: 10,
                width: responsive.WINDOW_WIDTH * 0.55,
                height: responsive.WINDOW_WIDTH * 0.55,
                backgroundColor: COLORS.GREEN_LIGHT,
                borderRadius: 10,
                marginHorizontal: normalizeFont(15),
                alignItems: 'center'

            }}
        >
            <Image source={{ uri: img_url }} style={{
                borderRadius: 10,
                width: '95%',
                height: '40%',
                marginTop: normalizeFont(10),
                marginBottom: normalizeFont(15)
            }} />
            <Text
                style={{
                    color: '#fff',
                    fontSize: normalizeFont(22),
                    fontWeight: '600',
                    fontFamily: 'Poppins'
                }}
            >{item.Name}</Text>
        </TouchableOpacity>
    )

}