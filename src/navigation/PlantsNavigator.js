import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailScreen from "../pages/Home/DetailScreen";
import routes from "../constants/routes";
import HealthScreen from "../pages/Home/HealthScreen";
import PlantsScreen from "../pages/Home/PlantsScreen";
import NoteScreen from "../pages/Home/NoteScreen";

const Stack = createNativeStackNavigator();

export default function PlantsNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.MY_PLANTS} component={PlantsScreen} />
            <Stack.Screen name={routes.DETAILS} component={DetailScreen} options={{ headerShown: true }} />
            <Stack.Screen name={routes.HEALTH} component={HealthScreen} />
            <Stack.Screen name={routes.NOTE_SCREEN} component={NoteScreen} />
        </Stack.Navigator>
    )
}