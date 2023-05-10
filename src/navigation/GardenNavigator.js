import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailScreen from "../pages/Home/DetailScreen";
import routes from "../constants/routes";
import HealthScreen from "../pages/Home/HealthScreen";
import ListScreen from "../pages/Home/ListScreen";
import GardenScreen from "../pages/Home/GardenScreen";
const Stack = createNativeStackNavigator();

export default function GardenNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.MY_GARDEN} component={GardenScreen} />
            <Stack.Screen name={routes.LIST} component={ListScreen} />
            <Stack.Screen name={routes.DETAILS} component={DetailScreen} options={{ headerShown: true }} />
            <Stack.Screen name={routes.HEALTH} component={HealthScreen} />
        </Stack.Navigator>
    )
}