import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function MyPlantMenu({ hide, windowHeight }) {
    const items = [
        {
            id: 1,
            title: 'Correct the result',
            color: '#30C67F',
            action: hide
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
            <TouchableOpacity onPress={hide} style={{ borderBottomWidth: 1, borderBottomColor: '#6666', width: '100%', paddingVertical: 8, alignItems: 'center' }}>
                <Text key={item.id} style={{ fontWeight: '700', color: item.color, fontSize: 22 }}>
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