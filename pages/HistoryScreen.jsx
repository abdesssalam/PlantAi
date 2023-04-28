
import React from 'react'

import MyPlantEmpty from '../components/myplants/MyPlantEmpty'

import { getDiseaseData } from '../services/PlantsService'
import ShowListPlants from '../components/myplants/ShowListPlants'


export default function HistoryScreen() {

    const data = getDiseaseData();


    return data.length > 0 ? <ShowListPlants data={data} /> : <MyPlantEmpty />
}

