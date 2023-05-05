import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { disessData } from '../../data/disessData'

export default function PlantHealth({ plantName, condition, imgUrl, handleBack }) {

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
                <TouchableOpacity onPress={handleBack} style={{

                    // position:'absolute',
                    alignSelf: 'flex-start',
                    backgroundColor: 'rgba(102,102,102,0.4)',
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    marginLeft: 15

                }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={50} />
                </TouchableOpacity>



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

                <Image
                    source={{ uri: 'https://061f-160-176-197-152.ngrok-free.app' + imgUrl }}
                    style={{ width: '80%', height: 150, borderRadius: 10 }} />
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

