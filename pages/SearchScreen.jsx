import { View, Text, StyleSheet, TextInput, FlatList, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Card from '../components/Card'

export default function SearchScreen() {
    const [search, setSearch] = useState('')

    let popularPlantsData = [
        {
            id: 1,
            title: 'Vegetables',
            img: require('../assets/vegetables.jpg')
        },
        {
            id: 2,
            title: 'Fruits',
            img: require('../assets/fruits.jpg')
        },
        {
            id: 3,
            title: 'Tree',
            img: require('../assets/tree.jpg')
        },
        {
            id: 4,
            title: 'Toxic Plants',
            img: require('../assets/toxicPlants.jpg')
        },
        {
            id: 5,
            title: 'Flowers',
            img: require('../assets/flowers.jpg')
        },
        {
            id: 6,
            title: 'Leaf Plants',
            img: require('../assets/leafPlants.jpg')
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <FontAwesomeIcon style={styles.inpuIcon} icon={faSearch} />
                <TextInput style={styles.input} value={search} placeholder={'search plants'} />
            </View>
            <ImageBackground resizeMode='cover' source={require('../assets/plantIdentifier.png')} imageStyle={{ borderRadius: 10 }} style={{ height: 80, width: '90%', marginVertical: 10 }}>
                <View style={{ position: 'absolute', right: 50, top: 10 }}>
                    <Text style={{ fontSize: 20, color: '#000', fontWeight: '700' }}>Plant Identifier</Text>
                    <Text style={{ color: '#666666', fontSize: 14, lineHeight: 20 }}>Identify your favorite plants</Text>
                </View>

            </ImageBackground>
            <View style={{ width: '95%' }}>
                <Text style={{ fontFamily: 'Poppins', fontWeight: '800', color: '#666666', fontSize: 18 }}>Popular Plants</Text>


                <FlatList style={{ paddingVertical: 15, marginTop: 10 }} scrollEnabled={true} numColumns={2} data={popularPlantsData} renderItem={({ item }) => <Card text={item.title} imgSrc={item.img} width={200} height={80} />} />

            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#EDFAF7',

        },
        inputWrapper: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            // borderColor: '#9b8f8f',
            // borderWidth: 2,
            width: '80%',
            paddingHorizontal: 10,
            borderRadius: 15,
            marginVertical: 8,
        },
        inpuIcon: {
            padding: 10,
            color: '#666666'
        },
        input: {
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#fff',
            color: '#666666',
            marginLeft: 10,
            fontSize: 18,
        },
    }
)