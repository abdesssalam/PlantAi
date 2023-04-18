import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { TextInput } from 'react-native-gesture-handler'

export default function MyPlantsScreen() {
    const [search, setSearch] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <FontAwesomeIcon style={styles.inpuIcon} icon={faSearch} />
                <TextInput style={styles.input} value={search} placeholder={'search plants'} />
            </View>
        </View>
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