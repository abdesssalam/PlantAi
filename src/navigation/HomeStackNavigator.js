import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailScreen from "../pages/Home/DetailScreen";
import HomeListScreen from "../pages/Home/HomeListScreen";
import routes from "../constants/routes";
import HomeScreen from "../pages/Home/HomeScreen";
const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.HOME} component={HomeScreen} />
            <Stack.Screen name={routes.DETAILS} component={DetailScreen} options={{ headerShown: true }} />
            <Stack.Screen name={routes.HOME_LIST} component={HomeListScreen} />
        </Stack.Navigator>
    )
}
