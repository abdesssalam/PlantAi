import { View, Text } from 'react-native'
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from 'react'
import { getUsergarden } from '../../services/PlantsService';
import routes from '../../constants/routes';
import MyPlantEmpty from '../../components/Plants/EmptyListPlant';
import { ActivityIndicator } from '@react-native-material/core';
import responsive from '../../constants/responsive';

export default function GardenScreen({ navigation }) {
    const [data, setData] = useState([])
    const isFocused = useIsFocused();
    const [isLoading, setLoaing] = useState(true)

    async function getData() {
        setLoaing(true)
        const plants = await getUsergarden();
        setLoaing(false)
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