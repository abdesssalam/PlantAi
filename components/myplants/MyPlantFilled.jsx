import { View, Text, FlatList, Image, Modal, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import { useState } from 'react'
import MyPlantMenu from './MyPlantMenu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DrawCard = ({ title, name, date, action, item }) => {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    // let path = '../../data/imgs/' + item.general.id + '.jpg'

    return (
        <TouchableOpacity onPress={() => action(item)} style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, width: '100%', padding: 10, marginTop: 15 }} >
            <Image source={item.img} style={{ width: 150, height: 150 }} />
            <View style={{ marginLeft: 15 }}>
                <Text style={{ flexWrap: 'wrap', fontSize: 22, color: '#30C67F', fontWeight: '800', textAlign: 'justify' }}>{title}</Text>
                <Text style={{ fontSize: 16, color: '#A3A3A3' }}>{name}</Text>
                <Text style={{ position: 'absolute', bottom: 10 }}>{date}</Text>
            </View>
            <TouchableOpacity onPress={show} style={{ position: 'absolute', top: 5, right: 5, padding: 10 }}>
                <Image source={require('../../assets/dots.png')} />
            </TouchableOpacity>
            <Modal visible={visible} animationType='slide' transparent={true} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ height: windowHeight * 0.55, backgroundColor: '#ddd', opacity: 0.5 }} onPress={hide} />
                <MyPlantMenu hide={hide} windowHeight={windowHeight} />
            </Modal>

        </TouchableOpacity >
    )
}

export default function MyPlantFilled({ myPlantData, goToPreview }) {

    return (
        <FlatList style={{ width: '95%' }} data={myPlantData} renderItem={({ item }) => <DrawCard title={item.general.name} name={item.general.scientific_name} date={item.general.species} item={item} action={goToPreview} />} />
    )
}
