import { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity, Pressable, Dimensions, BackHandler } from 'react-native'
import responsive from '../../constants/responsive';
import MyPlantMenu from '../../components/Plants/MyPlantMenu';
import routes from '../../constants/routes';
import urls from '../../constants/urls';

export default function ListScreen({ route, navigation }) {
    const data = route.params.data
    const GO_TO_DETAILS = (item) => {

        navigation.navigate(routes.DETAILS, { item: item })
    }
    return (
        <FlatList style={{ width: '100%' }} data={data} renderItem={({ item }) => <DrawCard item={item} handlePress={GO_TO_DETAILS} />} />
    )
}

const DrawCard = ({ item, handlePress }) => {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    return (

        <TouchableOpacity onPress={() => handlePress(item)} style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, width: '100%', padding: 10, marginTop: 15 }} >
            <Image source={{ uri: urls.AI_API + item['img'] }} style={{ width: 150, height: 150 }} />
            <View style={{ marginLeft: 15 }}>
                <Text style={{ flexWrap: 'wrap', fontSize: 22, color: '#30C67F', fontWeight: '800', textAlign: 'justify' }}>{item.general.name}</Text>
                <Text style={{ fontSize: 16, color: '#A3A3A3' }}>{item.general['scientific_name']}</Text>
                <Text style={{ position: 'absolute', bottom: 10, fontWeight: '600', color: '#000', fontSize: 18 }}>{item.key_facts['Plant Type']}</Text>
            </View>
            <TouchableOpacity onPress={show} style={{ position: 'absolute', top: 5, right: 5, padding: 10 }}>
                <Image source={require('../../assets/dots.png')} />
            </TouchableOpacity>
            <Modal visible={visible} animationType='slide' transparent={true} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ height: responsive.WINDOW_HEIGHT * 0.55, backgroundColor: '#ddd', opacity: 0.5 }} onPress={hide} />
                <MyPlantMenu hide={hide} windowHeight={responsive.WINDOW_HEIGHT} plant={item} />
            </Modal>

        </TouchableOpacity >
    )
}