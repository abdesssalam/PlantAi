import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { disessData } from '../../data/disessData'

export default function PlantHealth({ plantName, condition, imgUrl }) {
    let plant = disessData[plantName];
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingTop: 5,
                    backgroundColor: '#EDFBFF',
                    paddingBottom: 25

                }}
            >

                <Image source={{ uri: 'https://061f-160-176-197-152.ngrok-free.app' + imgUrl }} style={{ width: 150, height: 150 }} />

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingVertical: 10,
                        paddingHorizontal: 15
                    }}
                >
                    <FontAwesomeIcon icon={faNotesMedical} size={30} color='#666' />
                    <Text
                        style={{
                            color: '#666',
                            fontSize: 32,
                            fontWeight: '700',
                            marginLeft: 20
                        }}
                    >Plant Health State</Text>
                </View>
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
                                // color: '#269460',
                                color: '#EC4F4F',
                                fontSize: 22,
                                fontWeight: '700'

                            }}
                        // >Healthy</Text>
                        >Canker</Text>
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
    )
}

const DrawSection = ({ itemKey, itemVal }) => {
    return (
        <View
            style={{
                padding: 10
            }}
        >
            <Text
                style={{
                    color: '#000',
                    fontSize: 22,
                    fontWeight: '600',
                    marginBottom: 8,
                }}
            >{itemKey}</Text>
            <Text
                style={{
                    color: '#666',
                    fontSize: 18,
                    lineHeight: 25,
                    textAlign: 'justify'
                }}
            >
                {itemVal}
            </Text>
        </View>
    )
}

