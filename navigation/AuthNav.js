import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OnBoardingScreen from "../pages/OnBoardingScreen";
import LoginScreen from "../pages/LoginScreen";
import Register from "../pages/Register";
import AppNav from "./AppNav";


const Stack = createNativeStackNavigator();
export default function AuthNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Boarding' component={OnBoardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name="App" component={AppNav} />
        </Stack.Navigator>
    )
}
