import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { TextInput } from 'react-native-gesture-handler'

import MyPlantEmpty from '../components/myplants/MyPlantEmpty'
import MyPlantFilled from '../components/myplants/MyPlantFilled'
import { UserGarden, getUserGarden } from '../services/PlantsService'
import ShowListPlants from '../components/myplants/ShowListPlants'


export default function MyPlantsScreen({ route, navigation }) {

    const data = getUserGarden();


    return data.length > 0 ? <ShowListPlants data={data} /> : <MyPlantEmpty />
}

