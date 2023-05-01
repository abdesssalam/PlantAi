import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from '@react-native-material/core'

export default function ShowIndecator() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator style={{ height: 50, width: 50 }} />
        </View>
    )
}

