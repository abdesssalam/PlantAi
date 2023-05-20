import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera, faHome, faPlantWilt, faSearch, faSunPlantWilt } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, View, Image, Text } from "react-native";
import routes from "../constants/routes";

import ProfileScreen from "../pages/Home/ProfileScreen";

import HomeStackNavigator from "./HomeStackNavigator";
import PlantsNavigator from "./PlantsNavigator";
import GardenNavigator from "./GardenNavigator";
import DetailScreen from "../pages/Home/DetailScreen";
import CameraNavigator from "./CameraNavigator";

export default function HomeTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={routes.HOME_STACK}
            screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar, tabBarShowLabel: false, tabBarHideOnKeyboard: true, }}>
            <Tab.Screen name={routes.HOME_STACK} component={HomeStackNavigator} options={{
                tabBarIcon: ({ focused }) => (

                    <View style={{ alignItems: 'center' }}>
                        <Image source={focused ? require('../assets/tabHomeClicked.png') : require('../assets/tabHome.png')} />
                        <Text style={{ color: focused ? '#30C67F' : '#666666', fontWeight: '600' }} >Home</Text>
                    </View>
                )
            }} />
            <Tab.Screen name={routes.PLANTS_NAV} component={GardenNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faPlantWilt} color={focused ? '#30C67F' : '#9DB2CE'} />
                        <Text style={{ color: focused ? '#30C67F' : '#666666', fontWeight: '600' }} >My Plants</Text>
                    </View>
                )
            }} />
            <Tab.Screen name={routes.CAMERA_NAV} component={CameraNavigator} options={{
                tabBarIcon: ({ focused }) => (
                    !focused && (
                        <View style={{
                            marginTop: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 65,
                            height: 65,
                            borderRadius: 35,
                            // backgroundColor: '#EDFAF7',
                            borderColor: '#EDFAF7',
                            borderWidth: 15,
                            borderTopWidth: 0,
                            position: 'absolute',
                            top: -30
                        }}
                        >
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: '#30C67F',


                            }}>
                                <FontAwesomeIcon icon={faCamera} size={25} color="#fff" />
                            </View>
                        </View>
                    )
                ),
            }} />
            <Tab.Screen name={routes.GARDEN_NAV} component={GardenNavigator} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={focused ? require('../assets/tabmyplantsClicked.png') : require('../assets/tabmyPlant.png')} />
                        <Text style={{ color: focused ? '#30C67F' : '#666666', fontWeight: '600' }} >My Garden</Text>
                    </View>
                )
            }} />
            <Tab.Screen name={routes.PROFILE} component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={focused ? require('../assets/tabprofileClicked.png') : require('../assets/tabprofile.png')} />
                        <Text style={{ color: focused ? '#30C67F' : '#666666', fontWeight: '600' }} >Profile</Text>
                    </View>
                )
            }} />
            {/* auther routes to simplify navigation */}
            <Tab.Screen name={routes.DETAILS} component={DetailScreen} options={{ tabBarButton: () => null }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        elevation: 5,
        height: 60,
        marginTop: 10,
    }
})