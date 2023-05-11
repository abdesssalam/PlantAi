import { View, Text } from 'react-native'
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from 'react'
import { getUsergarden } from '../../services/PlantsService';
import routes from '../../constants/routes';

export default function GardenScreen({ navigation }) {
    const [data, setData] = useState([])
    const isFocused = useIsFocused();


    async function getData() {
        const plants = await getUsergarden();
        setData(plants)
        if (plants.length > 0) navigation.navigate(routes.LIST, { data: data })
    }

    useEffect(() => {
        getData()
        if (isFocused) {
            getData()
        }
    }, [isFocused])

    return (
        <View>
            <Text>PlantsScreen</Text>
        </View>
    )
}