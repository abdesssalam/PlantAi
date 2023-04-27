import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FormBtn({ text, action }) {
    return (

        <TouchableOpacity style={styles.btn} onPress={action} >
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>


    )
}
const styles = StyleSheet.create({

    btn: {
        backgroundColor: '#2ec980',

        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        width: '80%',
        // marginTop: 10
    },
    btnText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
    },
})
