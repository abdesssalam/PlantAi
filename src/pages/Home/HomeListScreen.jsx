import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import routes from '../../constants/routes'
import MyPlantEmpty from '../../components/Plants/EmptyListPlant'

export default function HomeListScreen({ route, navigation }) {
    const items = route.params.items
    const handleItemClicked = (item) => {
        navigation.navigate(routes.DETAILS, { item: item })
    }
    if (items.length > 0) {

        return (
            <View>
                <FlatList style={{ width: '100%' }} data={items} renderItem={({ item }) => <DrawCard item={item} handleItemClicked={handleItemClicked} />} />
            </View>
        )
    } else {
        return <MyPlantEmpty />

    }
}

const DrawCard = ({ item, handleItemClicked }) => {
    return (
        <TouchableOpacity onPress={() => handleItemClicked(item)} style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, width: '100%', padding: 10, marginTop: 15 }} >
            <Image source={item.general['image']} style={{ width: 150, height: 150 }} />
            <View style={{ marginLeft: 15 }}>
                <Text style={{ flexWrap: 'wrap', fontSize: 22, color: '#30C67F', fontWeight: '800', textAlign: 'justify' }}>{item.general.fr_name}</Text>
                <Text style={{ fontSize: 16, color: '#A3A3A3' }}>{item.general['scientific_name']}</Text>
                <Text style={{ position: 'absolute', bottom: 10, fontWeight: '600', color: '#000', fontSize: 18 }}>{item.key_facts['Plant Type']}</Text>
            </View>


        </TouchableOpacity >
    )
}