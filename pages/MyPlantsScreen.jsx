import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { TextInput } from 'react-native-gesture-handler'

import MyPlantEmpty from '../components/myplants/MyPlantEmpty'
import MyPlantFilled from '../components/myplants/MyPlantFilled'
import { plantsData } from '../data/Plants'

export default function MyPlantsScreen({ route, navigation }) {
    const [search, setSearch] = useState('')
    let dataPlants = plantsData;

    const goToPreview = (item) => {
        // console.log(item)
        console.log('go to preview')
        navigation.navigate('preview', { item: item })
    }
    useEffect(() => {
        plantsData.forEach(item => {



            // console.log('facts : \n\n\n')
            // console.log(Object.keys(item.key_facts))
            // console.log('chara')
            // console.log(Object.keys(item.characteristics))


            console.log("d-------")
        })
        // console.log(plantsData.length)
    }, [])

    // const RenderContent = () => 
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <FontAwesomeIcon style={styles.inpuIcon} icon={faSearch} />
                <TextInput style={styles.input} value={search} placeholder={'search plants'} />
            </View>
            {dataPlants.length === 0 ? <MyPlantEmpty /> : <MyPlantFilled myPlantData={dataPlants} goToPreview={goToPreview} />}
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