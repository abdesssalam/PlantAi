import { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity, Pressable, Dimensions, BackHandler } from 'react-native'
import responsive, { normalizeFont } from '../../constants/responsive';
import MyPlantMenu from '../../components/Plants/MyPlantMenu';
import routes from '../../constants/routes';
import urls from '../../constants/urls';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { getUsergarden } from '../../services/PlantsService';
import MyPlantEmpty from '../../components/Plants/EmptyListPlant';
import LottieView from 'lottie-react-native'
import { disessData } from '../../data/disessData';

export default function GardenScreen() {
    const navigation = useNavigation();

    const [data, setData] = useState([])
    const isFocused = useIsFocused();

    const [isLoading, setLoading] = useState(false)
    const notify = async () => {
        await getData()
    }
    async function getData() {

        setLoading(true)
        let plants;
        plants = await getUsergarden()
        setData(plants)
        if (plants.length > 0) {
            plants.sort(function (a, b) {
                return new Date(b.created_at) - new Date(a.created_at);
            });
            setData(plants)
        }

        setLoading(false)
    }

    const GO_TO_DETAILS = (item) => {
        navigation.navigate(routes.DETAILS, { item: item })
    }
    useEffect(() => {
        getData()

    }, [isFocused])

    if (isLoading) {
        return <DrawLoading />
    } else if (data.length === 0) {
        return <MyPlantEmpty />
    } else {
        return <FlatList style={{ width: '100%' }} data={data} renderItem={({ item }) => <DrawCard item={item} handlePress={GO_TO_DETAILS} notify={notify} />} />
    }
}

const DrawCard = ({ item, handlePress, notify }) => {
    const [visible, setVisible] = useState(false);
    let disease_name = item.Condition === 'Healthy' ? 'bonne santé ' : disessData[item.general.name].Condition[item.Condition].fr_name
    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    return (

        <TouchableOpacity onPress={() => handlePress(item)} style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, width: '95%', padding: 10, marginTop: 15, elevation: 10, marginHorizontal: normalizeFont(8) }} >
            <Image source={{ uri: urls.AI_API + item['img'] }} style={{ width: 150, height: 150, borderRadius: 15 }} />
            <View style={{ marginLeft: 15 }}>
                <Text style={{ flexWrap: 'wrap', fontSize: 22, color: '#30C67F', fontWeight: '800', textAlign: 'justify' }}>{item.general.fr_name}</Text>
                <Text style={{ fontSize: 16, color: item.Condition === 'Healthy' ? '#269460' : '#EC4F4F' }}>{disease_name}</Text>
                <Text style={{ position: 'absolute', bottom: 10, fontWeight: '600', color: '#000', fontSize: 18 }}>{item.key_facts['Plant Type']}</Text>
            </View>
            <TouchableOpacity onPress={show} style={{ position: 'absolute', top: 5, right: 5, padding: 10 }}>
                <Image source={require('../../assets/dots.png')} />
            </TouchableOpacity>
            <Modal visible={visible} animationType='slide' transparent={true} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ height: responsive.WINDOW_HEIGHT * 0.55, backgroundColor: '#ddd', opacity: 0.5 }} onPress={hide} />
                <MyPlantMenu hide={hide} windowHeight={responsive.WINDOW_HEIGHT} plant={item} refresh_data={notify} />
            </Modal>

        </TouchableOpacity >
    )
}

const DrawLoading = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <LottieView source={require('../../assets/load_plants.json')} autoPlay loop />

        </View>
    )
}