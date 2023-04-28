import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const DrawHeader = ({ src, text }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={src} />
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#000', marginLeft: 15 }}>{text}</Text>
            <Image style={{ position: 'absolute', top: 5, right: 5 }} source={require('../../assets/dots.png')} />
        </View>
    )
}

const DrawFact = ({ title, text }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 10, flexWrap: 'wrap' }}>
            <Text style={{ fontSize: 16, color: '#000' }}>{title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#000' }}>{text}</Text>
        </View>
    )
}

export default function DetailsScreen({ item, handleBack }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleBack} style={{
                    position: 'absolute',
                    left: 20,
                    top: 20,
                    zIndex: 10,
                    backgroundColor: 'rgba(102,102,102,0.4)',
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 5,

                }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={50} />
                </TouchableOpacity>

                <Image source={{ uri: `https://planntai.000webhostapp.com/imgs/${item.general.id}.JPG` }} style={{ borderRadius: 15, width: '95%', height: '25%' }} />
                <View style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#000', marginBottom: 10 }}>{item.general.name}</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, lineHeight: 21, color: '#000' }}>{item.Description}</Text>
                </View>
                <View style={styles.box}>
                    <DrawHeader src={require('../../assets/ic_outline-monitor-heart.png')} text={'Plant Health'} />
                    <View style={{
                        flexDirection: 'row',
                        marginVertical: 10
                    }}>
                        <Image source={{ uri: `https://planntai.000webhostapp.com/imgs/${item.general.id}.JPG` }} style={{ width: 100, height: 100, borderRadius: 10, marginRight: 20 }} />
                        <View>
                            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 18, marginBottom: 8 }}>This plant looks ! <Text style={{ color: item.plant_health.Health === 'Healthy' ? '#30C67F' : '#FF0000' }}>{item.plant_health.Health}</Text></Text>
                            {item.plant_health.Health !== 'Healthy' &&
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={{ color: '#30C67F' }}>Check for Solutions</Text>
                                </TouchableOpacity>}
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <DrawHeader src={require('../../assets/ic_key_features.png')} text={'Key Facts'} />
                    {
                        Object.keys(item.key_facts).map((key, idx) => {
                            return <DrawFact key={idx} title={key} text={item.key_facts[key].toString()} />
                        })
                    }
                </View>
                <View style={styles.box}>
                    <DrawHeader src={require('../../assets/ic_characteristics.png')} text={'Characteristics'} />
                    {

                        Object.keys(item.characteristics).map((key, idx) => {
                            return Object.keys(item.characteristics[key]).map((kk, ii) => {
                                return <DrawFact key={`${idx}-${kk}`} title={kk} text={item.characteristics[key][kk].toString()} />

                            })
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 5,
        backgroundColor: '#EDFBFF',
        paddingBottom: 25
    },
    card: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '95%',
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    box: {
        backgroundColor: '#fff',
        width: '95%',
        marginTop: 5,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    btn: {
        borderWidth: 1,
        borderColor: '#30C67F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10
    }


})