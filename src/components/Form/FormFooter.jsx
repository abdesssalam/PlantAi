import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function FormFooter({ onPress, textAction, text }) {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: 10

        }}>
            <Text style={{
                fontSize: 18,
                color: '#000'
            }}
            >{text} </Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={{
                    color: '#269460',
                    fontSize: 18
                }}>{textAction}</Text>
            </TouchableOpacity>
        </View>
    )
}
