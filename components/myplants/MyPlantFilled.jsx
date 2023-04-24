import { View, Text, FlatList, Image, Modal, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import { useState } from 'react'
import MyPlantMenu from './MyPlantMenu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DrawCard = ({ src, title, name, date }) => {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true)
    const hide = () => setVisible(false)
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, width: '100%', padding: 10, marginTop: 15 }} >
            <Image source={src} style={{ width: 150, height: 150 }} />
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

        </View>
    )
}

export default function MyPlantFilled({ myPlantData }) {



    return (



        <FlatList style={{ width: '95%' }} data={myPlantData} renderItem={({ item }) => <DrawCard src={item.src} title={item.title} name={item.name} date={item.date} />} />


    )
}
