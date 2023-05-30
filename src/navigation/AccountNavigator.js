import { createNativeStackNavigator } from "@react-navigation/native-stack"
import routes from "../constants/routes";
import AccountScreen from "../pages/App/AccountScreen";
import NewPasswordScreen from "../pages/Auth/NewPasswordScreen";
const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
            <Stack.Screen name={routes.NEW_PASSWORD} component={NewPasswordScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator