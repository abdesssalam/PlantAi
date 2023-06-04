import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import routes from '../../constants/routes'
import responsive from '../../constants/responsive'
import urls from '../../constants/urls'
import { disessData } from '../../data/disessData'

export default function DetailScreen({ route, navigation }) {
    const item = route.params.item
    let path = item['img'] ? item['img'] : item['image_url'];
    console.log("item.general")
    console.log(item)
    console.log("item.general")
    let plant = disessData[item.general.name.replace(" ", "_")];
    console.log("plant")
    console.log(plant)
    console.log("plant")
    const handleRenderHealth = () => {
        let itemT = {
            condition: item.Condition,
            plantName: item.general.name,
            imgUrl: path
        }
        navigation.navigate(routes.HEALTH, { item: itemT })

    }
    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                // backgroundColor: 'red',
                display: "none",

            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
        });
    }, [navigation]);

    return (

        <ScrollView >
            <View style={styles.container}>
                {(item.general['image'] && (item['img'] || item['image_url'])) ?

                    <Image source={{ uri: `${urls.AI_API + path}` }} style={{ borderRadius: 15, width: '95%', height: '25%' }} />

                    :
                    <Image source={item.general['image']} style={{ borderRadius: 15, width: '95%', height: '25%' }} />

                }

                <View style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#000', marginBottom: 10 }}>{item.general.fr_name}</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, lineHeight: 21, color: '#000' }}>{item.Description}</Text>
                </View>
                {/* plant health */}
                {
                    item.Condition &&

                    <View style={styles.box}>
                        <DrawHeader src={require('../../assets/ic_outline-monitor-heart.png')} text={'la santé des plantes'} />
                        <View style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                            marginRight: 10,
                        }}>
                            <Image source={{ uri: `${urls.AI_API + path}` }} style={{ width: '20%', height: responsive.WINDOW_WIDTH * 0.2, borderRadius: 10, marginRight: 20 }} />
                            <View style={{ width: '80%' }}>
                                <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 14, marginBottom: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                                    {item.Condition === 'Healthy' ? 'Cette plante semble ' : 'La plante a une maladie appelée :'}
                                    <Text style={{ color: item.Condition === 'Healthy' ? '#30C67F' : '#EC4F4F' }}>
                                        {item.Condition === 'Healthy' ? 'en bonne santé' : plant.Condition[item.Condition]?.fr_name}
                                    </Text>
                                </Text>

                                <TouchableOpacity style={styles.btn} onPress={handleRenderHealth}>
                                    <Text style={{ color: '#30C67F' }}>plus de détails</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>}
                {/* end plant health*/}
                {/* end plant health */}
                <View style={styles.box}>
                    <DrawHeader src={require('../../assets/ic_key_features.png')} text={'Faits marquants'} />
                    {
                        Object.keys(item.key_facts).map((key, idx) => {
                            return <DrawFact key={idx} title={key} text={item.key_facts[key].toString()} />
                        })
                    }
                </View>
                <View style={styles.box}>
                    <DrawHeader src={require('../../assets/ic_characteristics.png')} text={'Caractéristiques'} />
                    {

                        Object.keys(item.characteristics).map((key, idx) => {
                            return Object.keys(item.characteristics[key]).map((kk, ii) => {
                                return <DrawFact key={`${idx}-${kk}`} title={kk} text={item.characteristics[key][kk].toString()} />

                            })
                        })
                    }
                </View>
                {/* <TouchableOpacity style={{ width: responsive.WINDOW_WIDTH * 0.95, backgroundColor: '#30C67F' }}>
                    <Text>save in my garden</Text>
                </TouchableOpacity> */}
                <View style={{ height: responsive.WINDOW_HEIGHT * 0.40 }}></View>
            </View>
        </ScrollView>

    )
}


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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 5,
        backgroundColor: '#FFF',
        paddingBottom: 60
    },
    card: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '95%',
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 10,
        borderRadius: 10,
    },
    box: {
        backgroundColor: '#fff',
        width: '95%',
        marginTop: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 10,
        borderRadius: 10
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