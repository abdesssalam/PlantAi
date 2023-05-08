import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { disessData } from '../../data/disessData'
import { WINDOW_HEIGHT, WINDOW_WIDTH, normalizeFont } from '../../consts/components'

export default function PlantHealth({ plantName, condition, imgUrl, handleBack }) {

    let plant = disessData[plantName];
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: WINDOW_WIDTH,
                    backgroundColor: '#FFF',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    height: WINDOW_HEIGHT * 0.10,
                    paddingHorizontal: normalizeFont(10)
                }}
            >
                <TouchableOpacity onPress={handleBack} >
                    <FontAwesomeIcon icon={faArrowLeft} size={30} color='#666' />
                </TouchableOpacity>
                <Text style={{
                    fontSize: normalizeFont(22),
                    color: '#666',
                    fontWeight: '600'
                }}>État de santé</Text>
                <FontAwesomeIcon icon={faNotesMedical} size={30} color='#666' />
            </View>
            <ScrollView
                style={{ flex: 1, paddingTop: WINDOW_HEIGHT * 0.10 }}
            >

                <View
                    style={{
                        // flex: 1,
                        alignItems: 'center',
                        paddingTop: 5,
                        backgroundColor: '#EDFBFF',
                        paddingBottom: 25,


                    }}
                >
                    <Image
                        source={{ uri: 'https://061f-160-176-197-152.ngrok-free.app' + imgUrl }}
                        style={{ width: '80%', height: 150, borderRadius: 10 }} />
                    <Text
                        style={{
                            color: '#000',
                            fontSize: normalizeFont(16),
                            fontWeight: '500'
                        }}
                    >nom du plante : <Text style={{ fontStyle: 'italic' }}>{plantName}</Text></Text>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingVertical: 10,
                        paddingHorizontal: 15

                    }}>
                        <Text style={{
                            color: '#000111',
                            fontStyle: 'italic',
                            fontSize: 22

                        }}>this plant looks : </Text>
                        <Text
                            style={{
                                // color: '#269460',
                                color: condition === 'Healthy' ? '#269460' : '#EC4F4F',
                                fontSize: 22,
                                fontWeight: '700'

                            }}
                        // >Healthy</Text>
                        >{condition === 'Healthy' ? 'Healthy' : 'Sick'}</Text>
                    </View>
                    {condition !== 'Healthy' &&
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingVertical: 10,
                            paddingHorizontal: 15

                        }}>
                            <Text style={{
                                color: '#000111',
                                // fontStyle: 'italic',
                                fontSize: 22,
                                fontWeight: '600'


                            }}>Disess Name : </Text>
                            <Text
                                style={{
                                    color: '#EC4F4F',
                                    fontSize: 22,
                                    fontWeight: '700'

                                }}

                            >{condition.replace("_", " ")}</Text>
                        </View>
                    }
                    {/* if not health */}
                    {
                        condition !== 'Healthy' &&
                        Object.keys(plant.Condition[condition]).map((k, idx) => {
                            if (k !== 'Care') {
                                return <DrawSection itemKey={k} itemVal={plant.Condition[condition][k]} />
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
                            marginTop: 10

                        }}
                    // >Healthy</Text>
                    >How to take care of this plant !!</Text>
                    {Object.keys(plant.Condition.Healthy.Care).map((k, idx) => {

                        return <DrawSection itemKey={k} itemVal={plant.Condition.Healthy.Care[k]} />


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
                padding: 10,
                width: '90%'
            }}
        >
            <Text
                style={{
                    color: '#666',
                    fontSize: 22,
                    fontWeight: '600',
                    marginBottom: 8,
                }}
            >{itemKey.replace("_", " ")}</Text>
            <View
                style={{
                    // borderWidth: 0.5,
                    // borderColor: '#666',
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: '#cde9cd',
                    elevation: 10
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        lineHeight: 25,
                        textAlign: 'justify'
                    }}
                >
                    {itemVal}
                </Text>
            </View>

        </View>
    )
}

