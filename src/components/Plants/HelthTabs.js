import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text } from 'react-native';
import responsive, { normalizeFont } from '../../constants/responsive';
import { useRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function HelthTabs({ disess }) {
    const ShowDisess = ({ navigation }) => {
        const route = useRoute();

        return (
            <View style={{
                backgroundColor: '#269460',
                flex: 1, justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: normalizeFont(10)

            }}>
                <Text
                    style={{
                        color: '#FFF',
                        // fontStyle: 'italic',
                        fontSize: normalizeFont(16)

                    }}>
                    {route.params.data}
                </Text>
            </View>

        )
    }
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#000', tabBarStyle: { backgroundColor: '#fff', borderBottomColor: '#ddd', borderTopLeftRadius: 15, borderTopRightRadius: 15 } }} >
            {Object.keys(disess).map((k, idx) => {
                if (k !== 'Care') {
                    return <Tab.Screen key={k} name={k} component={ShowDisess} initialParams={{ data: disess[k] }} />
                }

            })}
        </Tab.Navigator>
    )
}

