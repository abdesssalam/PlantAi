import { View, Text, ActivityIndicator } from 'react-native'
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from 'react'
import { getUserPlants } from '../../services/PlantsService';
import routes from '../../constants/routes';
import MyPlantEmpty from '../../components/Plants/EmptyListPlant';
import responsive from '../../constants/responsive';

export default function PlantsScreen({ navigation }) {
    const [data, setData] = useState([])
    const [isLoading, setLoaing] = useState(true)
    const isFocused = useIsFocused();


    async function getData() {
        setLoaing(true)
        const plants = await getUserPlants();
        await setLoaing(false)
        setData(plants)
        if (plants.length > 0) navigation.navigate(routes.LIST, { data: data })
    }

    useEffect(() => {
        getData()
        if (isFocused) {
            getData()
        }
    }, [isFocused])

    if (!isLoading && data.length === 0) {
        return <MyPlantEmpty />
    } else {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <ActivityIndicator size='large' color='#000'
                    style={{
                        width: responsive.WINDOW_WIDTH * 0.5,
                        height: responsive.WINDOW_WIDTH * 0.5,
                    }} />
                <Text>getiing data ...</Text>
            </View>)
    }
}

