import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailScreen from "../pages/Home/DetailScreen";
import routes from "../constants/routes";
import HealthScreen from "../pages/Home/HealthScreen";
import ListScreen from "../pages/Home/ListScreen";
import NoteScreen from "../pages/Home/NoteScreen";
const Stack = createNativeStackNavigator();
import { useRoute } from "@react-navigation/native";
import GardenScreen from "../pages/Home/GardenScreen";
export default function GardenNavigator() {
    const route = useRoute();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.MY_GARDEN} component={GardenScreen} />
            <Stack.Screen name={routes.DETAILS} component={DetailScreen} options={{ headerShown: true }} />
            <Stack.Screen name={routes.HEALTH} component={HealthScreen} />
            <Stack.Screen name={routes.NOTE_SCREEN} component={NoteScreen} />
        </Stack.Navigator>
    )
}