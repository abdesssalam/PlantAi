import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useIsFocused } from "@react-navigation/native";
import PlantHealth from '../components/myplants/PlantHealth'

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
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 10, flexWrap: 'wrap' }}>
            <Text style={{ fontSize: 16, color: '#000', textTransform: 'capitalize' }}>{title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#000', alignSelf: 'flex-end' }}>{text}</Text>
        </View>
    )
}


const PreviewScreen = ({ route, navigation }) => {
    const [showHealth, setShowHealth] = React.useState(false)
    const isFocused = useIsFocused();
    React.useEffect(() => {
        if (isFocused) {
            setShowHealth(false)

        }
    }, [isFocused]);
    const item = route.params.item

    const handleClick = () => {
        console.log('clicked')
        setShowHealth(true)
    }
    let idItem = item.general.id;
    console.log("url: ---" + showHealth)
    return (showHealth === true ? <PlantHealth condition={item.Condition} plantName={item?.general.name} imgUrl={item['image_url']} /> : <RenderPreview item={item} handleClick={handleClick} />)
}

export default PreviewScreen

const RenderPreview = ({ item, handleClick }) => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Image source={{ uri: `https://061f-160-176-197-152.ngrok-free.app${item['image_url']}` }} style={{ borderRadius: 15, width: '95%', height: '25%' }} />
                <View style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#000', marginBottom: 10 }}>{item?.general.name}</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, lineHeight: 21, color: '#000' }}>{item?.Description}</Text>
                </View>
                {/* plant health */}
                <View style={styles.box}>
                    <DrawHeader src={require('../assets/ic_outline-monitor-heart.png')} text={'Plant Health'} />
                    <View style={{
                        flexDirection: 'row',
                        marginVertical: 10
                    }}>
                        <Image source={{ uri: `https://061f-160-176-197-152.ngrok-free.app${item['image_url']}` }} style={{ width: 100, height: 100, borderRadius: 10, marginRight: 20 }} />
                        <View>
                            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 18, marginBottom: 8 }}>This plant looks {item.Condition === 'Healthy' ? '' : 'has'}  <Text style={{ color: item.Condition === 'Healthy' ? '#30C67F' : '#FF0000' }}>{item.Condition}</Text></Text>

                            <TouchableOpacity style={styles.btn} onPress={handleClick}>
                                <Text style={{ color: '#30C67F' }}>Check for Solutions</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* end plant health*/}
                <View style={styles.box}>
                    <DrawHeader src={require('../assets/ic_key_features.png')} text={'Key Facts'} />
                    {
                        Object.keys(item.key_facts).map((key, idx) => {
                            return <DrawFact key={idx} title={key} text={item.key_facts[key].toString()} />
                        })
                    }
                </View>
                <View style={styles.box}>
                    <DrawHeader src={require('../assets/ic_characteristics.png')} text={'Characteristics'} />
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
        paddingBottom: 50
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