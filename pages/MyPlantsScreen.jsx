import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { TextInput } from 'react-native-gesture-handler'

import MyPlantEmpty from '../components/myplants/MyPlantEmpty'
import MyPlantFilled from '../components/myplants/MyPlantFilled'

export default function MyPlantsScreen() {
    const [search, setSearch] = useState('')
    let myPlantData = [
        {
            id: 1,
            src: require('../assets/previewImage.jpg'),
            title: 'Lorem Ipsum 1',
            name: 'Disease name 1',
            date: 'April, 06 2023'
        },
        {
            id: 2,
            src: require('../assets/previewImage.jpg'),
            title: 'Lorem Ipsum 2',
            name: 'Disease name 2',
            date: 'April, 06 2023'
        },
        {
            id: 3,
            src: require('../assets/previewImage.jpg'),
            title: 'Lorem Ipsum 3',
            name: 'Disease name 3',
            date: 'April, 06 2023'
        },
        {
            id: 4,
            src: require('../assets/previewImage.jpg'),
            title: 'Lorem Ipsum 4',
            name: 'Disease name 4',
            date: 'April, 06 2023'
        },
        {
            id: 5,
            src: require('../assets/previewImage.jpg'),
            title: 'Lorem Ipsum 5',
            name: 'Disease name 5',
            date: 'April, 06 2023'
        },
    ]
    // const RenderContent = () => 
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <FontAwesomeIcon style={styles.inpuIcon} icon={faSearch} />
                <TextInput style={styles.input} value={search} placeholder={'search plants'} />
            </View>
            {myPlantData.length === 0 ? <MyPlantEmpty /> : <MyPlantFilled myPlantData={myPlantData} />}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
})