import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MovePlantToGarden, getPlants } from '../../services/PlantsService'


export default function MyPlantMenu({ hide, windowHeight, plant }) {

    const handleMoveToGatden = async () => {


        await MovePlantToGarden(plant.plant_id)

        await hide()
    }

    const items = [
        {
            id: 1,
            title: 'Save to my garden',
            color: '#30C67F',
            action: async () => { await handleMoveToGatden() }
        },
        {
            id: 2,
            title: 'Edit Name',
            color: '#30C67F',
            action: hide
        },
        {
            id: 3,
            title: 'Add Notes',
            color: '#30C67F',
            action: hide
        },
        {
            id: 4,
            title: 'Delete',
            color: '#EC4F4F',
            action: hide
        },
        {
            id: 5,
            title: 'Cancel',
            color: '#30C67F',
            action: hide
        },
    ]

    const showItems = items.map((item) => {
        return (
            <TouchableOpacity key={item.title} onPress={item.action} style={{ borderBottomWidth: 1, borderBottomColor: '#6666', width: '100%', paddingVertical: 8, alignItems: 'center' }}>
                <Text key={item.title} style={{ fontWeight: '700', color: item.color, fontSize: 22 }}>
                    {item.title}</Text>
            </TouchableOpacity>
        )
    })
    return (
        <View style={{ alignSelf: 'center', height: windowHeight * 0.45, backgroundColor: '#fff', width: '100%', alignItems: 'center', padding: 15 }}>

            {showItems}

        </View>
    )
}