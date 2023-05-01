import { View, Text, StyleSheet, TextInput, FlatList, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Card from '../Card'
import { useSelector } from 'react-redux'

const DrawCard = ({ text, width, height, imgSrc, handlePress }) => {
    return (
        <TouchableOpacity onPress={() => handlePress(text)}>
            <ImageBackground
                imageStyle={{ borderRadius: 6 }}
                source={imgSrc} style={{ width: width, height: height, marginVertical: 10, marginRight: 8 }}>
                <View style={[styles.overley, {
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }]}>
                    <Text style={{ color: '#fff', width: '80%', fontSize: 20, margin: 8, textTransform: 'capitalize' }}>{text}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>

    )
}

export default function HomeStarted({ handleClickedItem }) {
    //to test static




    //end test static


    const [search, setSearch] = useState('')
    const user = useSelector(state => state.user)
    //to debug

    //end debug
    var hours = new Date().getHours()

    let message;
    if (hours >= 4 && hours < 12) {
        message = 'good morning'
    } else if (hours < 16) {
        message = 'good afternoon'
    } else {
        message = 'good evening'
    }

    let popularPlantsData = [
        {
            id: 1,
            title: 'vegetable',
            img: require('../../assets/vegetables.jpg')
        },
        {
            id: 2,
            title: 'fruit',
            img: require('../../assets/fruits.jpg')
        },
        {
            id: 3,
            title: 'tree',
            img: require('../../assets/tree.jpg')
        },
        {
            id: 4,
            title: 'Toxic Plants',
            img: require('../../assets/toxicPlants.jpg')
        },
        {
            id: 5,
            title: 'Flowers',
            img: require('../../assets/flowers.jpg')
        },
        {
            id: 6,
            title: 'legume',
            img: require('../../assets/leafPlants.jpg')
        }
    ]

    let guidData = [
        {
            text: 'How to identify plants easily with AGRI AI',
            img: require('../../assets/cardBG1.png')
        },
        {
            text: 'Why the planet needs insects',
            img: require('../../assets/Guid2.png')
        },
    ]

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <FontAwesomeIcon style={styles.inpuIcon} icon={faSearch} />
                    <TextInput style={styles.input} value={search} placeholder={'search plants'} />
                </View>
                <Text style={{
                    width: '95%',
                    fontFamily: 'Poppins',
                    color: '#666666',
                    fontSize: 20,
                    marginVertical: 5
                }}>
                    {`${message}`}
                    , <Text style={{ color: '#000' }}>{user?.firstName}</Text>
                </Text>
                <View style={{ width: '95%', marginVertical: 15 }}>
                    <Text style={{ fontFamily: 'Poppins', fontWeight: '800', color: '#000', fontSize: 18 }}>Get Started</Text>

                    <FlatList horizontal={true} data={guidData} renderItem={({ item }) => <Card text={item.text} imgSrc={item.img} width={260} height={130} />} />

                </View>
                <View style={{ width: '95%' }}>
                    <Text style={{ fontFamily: 'Poppins', fontWeight: '800', color: '#000', fontSize: 18 }}>Popular Plants</Text>

                    <SafeAreaView style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {popularPlantsData.map(item => <DrawCard key={item.id} text={item.title} imgSrc={item.img} height={80} width={150} handlePress={handleClickedItem} />)}

                    </SafeAreaView>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
})