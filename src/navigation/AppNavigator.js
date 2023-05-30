import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/Drawer/CustomDrawer';
import routes from '../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo, faHouse, faPlantWilt, faUser } from '@fortawesome/free-solid-svg-icons';
import SettingScreen from '../pages/App/SettingScreen';
import AccountScreen from '../pages/App/AccountScreen';
import AboutScreen from '../pages/App/AboutScreen';
import HomeTabNavigator from './HomeTabNavigator';
import AccountNavigator from './AccountNavigator';
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false, drawerLabelStyle: styles.labels, drawerActiveBackgroundColor: '#0c9353d4', }}>
            <Drawer.Screen name={routes.HOME_NAV} component={HomeTabNavigator}
                options={{ drawerIcon: () => <FontAwesomeIcon icon={faHouse} size={25} color="#06fe87" />, title: 'Accueil' }}
            />

            <Drawer.Screen name={routes.ACCOUNT_NAV} component={AccountNavigator}
                options={{ drawerIcon: () => <FontAwesomeIcon icon={faUser} size={25} color="#06fe87" />, title: 'Mon compte' }} />
            {/* <Drawer.Screen name={routes.SETTINGS} component={SettingScreen}
                options={{ drawerIcon: () => <FontAwesomeIcon icon={faPlantWilt} size={25} color="#06fe87" /> }} /> */}

            <Drawer.Screen name={routes.ABOUT} component={AboutScreen}
                options={{ drawerIcon: () => <FontAwesomeIcon icon={faCircleInfo} size={25} color="#06fe87" />, title: 'À propos de nous' }} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    labels: {
        fontSize: 18,
        marginLeft: -15,
        color: '#fff'
    }
})