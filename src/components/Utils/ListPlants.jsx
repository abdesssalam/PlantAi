import { View, Text } from 'react-native'
import React from 'react'

export default function ListPlants({ route, navigation }) {
    const data = route.params.data
    console.log("List Plants...")
    console.log(data)
    console.log("List Plants...")
    return (
        <View>
            <Text>ListPlants</Text>
        </View>
    )
}
