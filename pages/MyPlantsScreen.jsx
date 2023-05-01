
import React from 'react'

import MyPlantEmpty from '../components/myplants/MyPlantEmpty'
import { getUserGarden } from '../services/PlantsService'
import ShowListPlants from '../components/myplants/ShowListPlants'
import { useIsFocused } from "@react-navigation/native";

export default function MyPlantsScreen({ route, navigation }) {
    const [data, setData] = React.useState([])
    const isFocused = useIsFocused();
    React.useEffect(() => {
        console.log("called");

        // Call only when screen open or when back on screen 
        if (isFocused) {
            setData(getUserGarden())
            console.log(data)
        }
    }, [isFocused]);


    return data.length > 0 ? <ShowListPlants data={data} /> : <MyPlantEmpty />
}

