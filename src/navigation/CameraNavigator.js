import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailScreen from "../pages/Home/DetailScreen";
import routes from "../constants/routes";
import HealthScreen from "../pages/Home/HealthScreen";
import CameraScreen from "../pages/Home/CameraScreen";
import ChooseScreen from "../pages/Home/ChooseScreen";
import PreCameraScreen from "../pages/Home/PreCameraScreen";
const Stack = createNativeStackNavigator();

export default function CameraNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.PRE_CAMERA_SCREEN} component={PreCameraScreen} />
            <Stack.Screen name={routes.CAMERA} component={CameraScreen} />
            <Stack.Screen name={routes.CHOOSE_SCREEN} component={ChooseScreen} />
            <Stack.Screen name={routes.DETAILS} component={DetailScreen} options={{ headerShown: true }} />
            <Stack.Screen name={routes.HEALTH} component={HealthScreen} />
        </Stack.Navigator>
    )
}