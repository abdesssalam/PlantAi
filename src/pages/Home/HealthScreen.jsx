import { View, Text, ScrollView, Image } from 'react-native'

import React from 'react'
import { disessData } from '../../data/disessData'
import responsive, { normalizeFont } from '../../constants/responsive'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeartCircleBolt, faShieldHalved, faVial } from '@fortawesome/free-solid-svg-icons'
import urls from '../../constants/urls'






export default function HealthScreen({ route }) {
    const item = route.params.item
    let plant = disessData[item.plantName.replace(" ", "_")];
    console.log("health screen")
    console.log(item)
    console.log("health screen")
    return (
        <View style={{ flex: 1, width: responsive.WINDOW_WIDTH, height: responsive.WINDOW_HEIGHT }}>
            <ScrollView
                style={{ flex: 1 }}
            >
                <View
                    style={{
                        // flex: 1,
                        alignItems: 'center',
                        paddingTop: 5,
                        backgroundColor: '#FFF',
                        paddingBottom: 25,
                    }}
                >
                    <Image
                        source={{ uri: urls.AI_API + item.imgUrl }}
                        style={{ width: responsive.WINDOW_WIDTH, height: responsive.WINDOW_WIDTH * 0.50, borderTopLeftRadius: 8, borderTopRightRadius: 8, }} />
                    <Text style={{
                        fontSize: normalizeFont(16),
                        fontWeight: '600', color: '#000',
                        alignSelf: 'flex-start',
                        marginLeft: normalizeFont(10),
                        marginTop: normalizeFont(8)
                    }}>{plant.Name}</Text>

                    <Text style={{
                        color: '#000111',
                        fontWeight: '400',
                        fontSize: normalizeFont(14),
                        alignSelf: 'flex-start',
                        marginLeft: normalizeFont(5),

                        width: '100%',
                        textAlign: 'auto'

                    }}>
                        {item.condition === 'Healthy' ? 'Cette plante semble ' : 'La plante a une maladie appelée :'}
                        <Text
                            style={{
                                color: item.condition === 'Healthy' ? '#269460' : '#EC4F4F',
                                fontSize: normalizeFont(14),
                                fontWeight: '700',
                            }}

                        >{item.condition === 'Healthy' ? 'en bonne santé' : plant.Condition[item.condition].fr_name}</Text>
                    </Text>
                    {
                        item.condition !== 'Healthy' &&
                        Object.keys(plant?.Condition[item.condition]).map((k, idx) => {
                            if (k !== 'fr_name') {
                                return <DrawHealthSection key={k} itemKey={k} itemVal={plant.Condition[item.condition][k]} />
                            }

                        })
                    }
                    <Text
                        style={{
                            color: '#269460',
                            // color: '#EC4F4F',
                            fontSize: 22,
                            fontWeight: '700',
                            alignSelf: 'flex-start',
                            marginLeft: 15,
                            marginTop: 10,
                            marginBottom: normalizeFont(14),
                            backgroundColor: '#ffee',
                            width: '100%'

                        }}
                    // >Healthy</Text>
                    >Comment prendre soin de cette plante</Text>
                    {Object.keys(plant.Condition.Healthy.Care).map((k, idx) => {

                        return <DrawSection key={k} itemKey={k} itemVal={plant.Condition.Healthy.Care[k]} />


                    })}
                </View>
            </ScrollView>
        </View>
    )
}



const DrawSection = ({ itemKey, itemVal }) => {
    return (
        <View
            style={{
                width: '90%',
                backgroundColor: '#53B9F2',
                marginBottom: normalizeFont(16),
                borderRadius: normalizeFont(8),
                elevation: 10
            }}
        >
            <Text
                style={{
                    color: '#FFF',
                    fontSize: 22,
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    marginLeft: normalizeFont(10),
                    paddingVertical: normalizeFont(5)

                }}
            >{itemKey.replace("_", " ")}</Text>
            <View

                style={{
                    padding: normalizeFont(10),
                    backgroundColor: '#FFF',
                    marginTop: normalizeFont(5),
                    width: '100%',
                    borderBottomLeftRadius: normalizeFont(8),
                    borderBottomRightRadius: normalizeFont(8),

                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: normalizeFont(16),
                        lineHeight: normalizeFont(25),
                        textAlign: 'left'
                    }}
                >
                    {itemVal}
                </Text>
            </View>

        </View>
    )
}

const DrawHealthSection = ({ itemKey, itemVal }) => {
    let icon;
    let color;
    if (itemKey === 'Symptômes') {
        icon = <FontAwesomeIcon icon={faHeartCircleBolt} size={40} color='#FFF' />
        color = '#EC4F4F'
    } else if (itemKey === 'Traitement') {
        color = '#269460'
        icon = <FontAwesomeIcon icon={faVial} size={40} color='#FFF' />
    } else {
        color = '#F5D256'
        icon = <FontAwesomeIcon icon={faShieldHalved} size={40} color='#FFF' />
    }
    return (
        <View style={{
            width: '100%',
            marginTop: normalizeFont(15)
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: color,
                    width: responsive.WINDOW_WIDTH * 0.45,
                    paddingHorizontal: normalizeFont(10),
                    paddingVertical: normalizeFont(5),
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15
                }}
            >
                <Text
                    style={{ color: '#fff', fontSize: normalizeFont(16), marginRight: normalizeFont(8), fontWeight: '600' }}
                >{itemKey}</Text>
                {icon}
            </View>
            <Text style={{ color: '#000', marginHorizontal: normalizeFont(12), marginVertical: normalizeFont(5), fontSize: normalizeFont(14), fontWeight: '400', textAlign: 'justify' }}>
                {itemVal}
            </Text>
        </View>
    )
}