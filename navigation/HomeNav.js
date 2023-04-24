import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, View, Image, Text } from "react-native";
import SearchScreen from "../pages/SearchScreen";
import MyPlantsScreen from "../pages/MyPlantsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import CameraScreen from "../pages/CameraScreen";
import PreviewScreen from "../pages/PreviewScreen";
const Tab = createBottomTabNavigator();

export default function HomeNav() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar, tabBarShowLabel: false }}  >
            <Tab.Screen name="home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={focused ? require('../assets/tabHomeClicked.png') : require('../assets/tabHome.png')} />
                        <Text style={{ color: focused ? '#30C67F' : '#666666', fontWeight: '600' }} >Home</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="search" component={SearchScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={focused ? require('../assets/tabsearchClicked.png') : require('../assets/tabsearch.png')} />
                        <Text style={{ color: focused ? '#30C67F' : '#666666', fontWeight: '600' }} >Search</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="camera" component={CameraScreen} options={{
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

                )
            }} />
            <Tab.Screen name="my plnats" component={MyPlantsScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={focused ? require('../assets/tabmyplantsClicked.png') : require('../assets/tabmyPlant.png')} />
                        <Text style={{ color: focused ? '#30C67F' : '#666666', fontWeight: '600' }} >My Plants</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={focused ? require('../assets/tabprofileClicked.png') : require('../assets/tabprofile.png')} />
                        <Text style={{ color: focused ? '#30C67F' : '#666666', fontWeight: '600' }} >Profile</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="preview" component={PreviewScreen} options={{ tabBarButton: () => null }} />
            {/* <Tab.Screen name="t" */}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        elevation: 5,
        height: 60,
    }
})