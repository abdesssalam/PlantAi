import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { TextInput } from 'react-native-gesture-handler'
import FormBtn from '../components/FormBtn'

export default function MyPlantsScreen() {
    const [search, setSearch] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <FontAwesomeIcon style={styles.inpuIcon} icon={faSearch} />
                <TextInput style={styles.input} value={search} placeholder={'search plants'} />
            </View>
            <View style={{
                width: '80%',
                marginVertical: 20,
                backgroundColor: '#fff',
                elevation: 15,
                alignItems: 'center',
                borderRadius: 10,

            }}>
                <Image resizeMode='contain' style={{ width: 200, height: 300, }} source={require('../assets/myPlantHero.png')} />
                <View style={{ paddingVertical: 15, alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#000', marginBottom: 5 }}>
                        This space is empty
                    </Text>
                    <Text style={{ color: '#666666', marginBottom: 10, fontSize: 18 }}>Add a plant to get a care plan!</Text>
                    <FormBtn text={'add first plant'} />
                </View>

            </View>
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