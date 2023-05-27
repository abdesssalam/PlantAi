import {
    View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground
} from 'react-native'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import HomeItems from '../../data/HomeItems'
import responsive, { normalizeFont } from '../../constants/responsive'
import routes from '../../constants/routes'
import { getHomePlants } from '../../services/PlantsService'


export default function HomeScreen({ navigation }) {
    const [search, setSearch] = useState('')

    const user = useSelector(state => state.user)

    const handleSearchChange = (newVal) => {
        setSearch(newVal)
    }

    const handlePress = (item) => {
        let data = getHomePlants(item)
        navigation.navigate(routes.HOME_LIST, { items: data })

    }

    return (
        <ScrollView style={{
            flex: 1,

        }}>
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <FontAwesomeIcon style={styles.inpuIcon} icon={faSearch} />
                    <TextInput style={styles.input} value={search} onChangeText={(v) => handleSearchChange(v)} placeholder={'search plants'} />
                </View>
                <Text style={{
                    width: '95%',
                    fontFamily: 'Poppins',
                    color: '#666666',
                    fontSize: 20,
                    marginVertical: 5
                }}>
                    Bienvenu
                    , <Text style={{ color: '#000' }}>{user?.firstName}</Text>
                </Text>
                <View style={{ width: '95%' }}>

                    <Text
                        style={{
                            fontFamily: 'Poppins',
                            fontWeight: '800',
                            color: '#000',
                            fontSize: normalizeFont(18)
                        }}>Plantes populaires</Text>

                    <SafeAreaView style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {HomeItems.popularPlantsData.map(item => <DrawCard key={item.id} text={item.title} imgSrc={item.img} height={responsive.WINDOW_WIDTH * 0.30} width={responsive.WINDOW_WIDTH * 0.90} handlePress={handlePress} />)}

                    </SafeAreaView>
                </View>

            </View>

        </ScrollView>
    )
}

const DrawCard = ({ text, width, height, imgSrc, handlePress }) => {
    return (
        <TouchableOpacity onPress={() => handlePress(text)}>
            <ImageBackground
                imageStyle={{ borderRadius: 10, }}
                source={imgSrc} style={{ width: width, height: height, marginVertical: 10, marginRight: 8 }}>
                <View style={[styles.overley, {
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }]}>
                    <Text
                        style={{
                            color: '#fff',
                            width: '80%',
                            fontSize: normalizeFont(18),
                            margin: 8,
                            textTransform: 'capitalize',
                            fontWeight: '600',
                            fontFamily: 'Poppins'
                        }}>{text}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EDFAF7',

    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

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
    overley: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 10
    }
})