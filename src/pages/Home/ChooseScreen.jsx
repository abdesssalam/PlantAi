import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import responsive, { normalizeFont } from '../../constants/responsive';
import COLORS from '../../constants/COLORS';
import { createPlant, getSingleItem } from '../../services/PlantsService';
import routes from '../../constants/routes';
import urls from '../../constants/urls';
export default function ChooseScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    const results = [
        route.params.data['result_0'],
        route.params.data['result_1'],
        route.params.data['result_2'],
    ]
    const image_url = route.params.data['image_url']
    const handlePress = (item) => {
        console.log("saving the plant")
        createPlant(item.Name, item.Condition, image_url)
        let item2 = getSingleItem(item.Name);
        item2 = { ...item2, ...item }
        item2 = { ...item2, ...{ image_url: image_url } }
        console.log(item2)
        console.log("saving the plant")

        navigation.navigate(routes.DETAILS, { item: item2 })
    }


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
                >select one </Text>
                <ScrollView horizontal style={{ flex: 1 }}>
                    {results.map(item => <DrawChooseCard item={item} key={item.Condition + item.Name} handlePress={handlePress} img_url={image_url} />)}
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
                backgroundColor: item.Condition === 'Healthy' ? COLORS.GREEN_LIGHT : '#EC4F4F',
                borderRadius: 10,
                marginHorizontal: normalizeFont(15),
                alignItems: 'center'

            }}
        >
            <Image source={{ uri: urls.AI_API + img_url }} style={{
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
            <Text
                style={{
                    color: "#ddd",
                    fontSize: normalizeFont(16),
                    fontWeight: '600',
                    fontFamily: 'Poppins',
                    marginTop: normalizeFont(8)
                }}
            >{item.Condition.replace("_", " ")}</Text>
        </TouchableOpacity>
    )

}