
import React from 'react'

import MyPlantEmpty from '../components/myplants/MyPlantEmpty'

import { getDiseaseData, getUserGarden } from '../services/PlantsService'
import ShowListPlants from '../components/myplants/ShowListPlants'
import { useIsFocused } from "@react-navigation/native";

export default function HistoryScreen() {

    const [data, setData] = React.useState([])
    const isFocused = useIsFocused();
    React.useEffect(() => {
        async function getData() {
            const plants = await getUserGarden();
            setData(plants)
        }
        if (isFocused) {

            getData()
            console.log("history")
            console.log(data)
        }
    }, [isFocused]);

    return data.length > 0 ? <ShowListPlants data={data} /> : <MyPlantEmpty />
}

