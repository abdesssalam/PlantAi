import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

export default function HomeNav() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="home" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faHome} color={focused ? 'green' : 'black'} /> }} />
        </Tab.Navigator>
    )
}