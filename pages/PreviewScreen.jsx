import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const DrawHeader = ({ src, text }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={src} />
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#000', marginLeft: 15 }}>{text}</Text>
            <Image style={{ position: 'absolute', top: 5, right: 5 }} source={require('../assets/dots.png')} />
        </View>
    )
}

const DrawFact = ({ title, text }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 10 }}>
            <Text style={{ fontSize: 16, color: '#000' }}>{title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#000' }}>{text}</Text>
        </View>
    )
}

const DrawFooter = () => {
    return (
        <View>

        </View>
    )
}
const PreviewScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../assets/previewImage.jpg')} style={{ borderRadius: 15, width: '95%' }} />
                <View style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#000', marginBottom: 10 }}>Plant Name</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, lineHeight: 21, color: '#000' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quibusdam ut, deserunt dolor nesciunt fuga.</Text>
                </View>
                <View style={styles.box}>
                    <DrawHeader src={require('../assets/ic_outline-monitor-heart.png')} text={'Plant Health'} />
                    <View style={{
                        flexDirection: 'row',
                        marginVertical: 10
                    }}>
                        <Image source={require('../assets/previewImage.jpg')} style={{ width: 100, height: 100, borderRadius: 10, marginRight: 20 }} />
                        <View>
                            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 18, marginBottom: 8 }}>This plant looks ! <Text style={{ color: '#FF0000' }}>sick</Text></Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={{ color: '#30C67F' }}>Check for Solutions</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <DrawHeader src={require('../assets/ic_key_features.png')} text={'Key Facts'} />
                    <DrawFact title='Plant Type' text='Lorem ipsum' />
                    <DrawFact title='Lifespan' text='Lorem ipsum' />
                    <DrawFact title='Planting Time' text='Lorem ipsum' />
                    <DrawFact title='Poisonous' text='Lorem ipsum' />
                    <DrawFact title='Life expectancy' text='1-2 years' />
                </View>
                <View style={styles.box}>
                    <DrawHeader src={require('../assets/ic_characteristics.png')} text={'Characteristics'} />
                    <DrawFact title='Plant Height' text='3 to 6 m' />
                    <DrawFact title='Spread' text='3 to 8 m' />
                    <DrawFact title='Leaf Color' text='Green, Blue, Red' />
                    <DrawFact title='Bloom Time' text='Spring' />
                    <DrawFact title='Flower size' text='2.5 to 5 cm' />
                    <DrawFact title='Flower Color' text='Red, White' />
                    <DrawFact title='Harvest Time' text='Fall' />
                    <DrawFact title='Fruit Color' text='Green, Yellow' />
                </View>
            </View>
        </ScrollView>
    )
}

export default PreviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 5,
        backgroundColor: '#EDFBFF'
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