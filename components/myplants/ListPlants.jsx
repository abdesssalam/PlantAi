import { View, Text, FlatList, Image, Modal, TouchableOpacity, Pressable, Dimensions, BackHandler } from 'react-native'
import { useEffect, useState } from 'react'
import MyPlantMenu from './MyPlantMenu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const windowHeight = Dimensions.get('window').height;

const DrawCard = ({ title, name, date, handleItemClicked, item, id }) => {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true)
    const hide = () => setVisible(false)


    return (
        <TouchableOpacity onPress={() => handleItemClicked(item)} style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, width: '100%', padding: 10, marginTop: 15 }} >
            {/* <Image source={require('../../assets/previewImage.jpg')} style={{ width: 150, height: 150 }} /> */}
            <Image source={{ uri: `https://planntai.000webhostapp.com/imgs/${item['img']}` }} style={{ width: 150, height: 150 }} />
            <View style={{ marginLeft: 15 }}>
                <Text style={{ flexWrap: 'wrap', fontSize: 22, color: '#30C67F', fontWeight: '800', textAlign: 'justify' }}>{title}</Text>
                <Text style={{ fontSize: 16, color: '#A3A3A3' }}>{name}</Text>
                <Text style={{ position: 'absolute', bottom: 10, fontWeight: '600', color: '#000', fontSize: 18 }}>{date}</Text>
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
export default function ListPlants({ datalist, handleItemClicked, handleBackBtn }) {
    if (datalist.length == 0) return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 34 }}>no data to show</Text></View>)

    // const handleBack = () => handleBackBtn
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackBtn)
        return () => { BackHandler.removeEventListener("hardwareBackPress", handleBackBtn); }
    }, [])
    return (

        <FlatList style={{ width: '100%' }} data={datalist} renderItem={({ item }) => <DrawCard title={item.general.name} name={item.general.scientific_name} date={item.key_facts['Plant Type'].toString()} item={item} id={item.general.id} handleItemClicked={handleItemClicked} />} />

    )
}