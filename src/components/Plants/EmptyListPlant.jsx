import { View, Text, Image } from 'react-native'
import FormBtn from '../Form/FormBtn'
import { useNavigation } from '@react-navigation/native'
import routes from '../../constants/routes'


export default function MyPlantEmpty() {
    const navigation = useNavigation()
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={{
                width: '80%',
                marginVertical: 20,
                backgroundColor: '#fff',
                elevation: 15,
                alignItems: 'center',
                borderRadius: 10,

            }}>
                <Image resizeMode='contain' style={{ width: 200, height: 300, }} source={require('../../assets/myPlantHero.png')} />
                <View style={{ paddingVertical: 15, alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#000', marginBottom: 10 }}>
                        Cet espace est vide
                    </Text>
                    <FormBtn text={'ajouter la première plante'} action={() => { navigation.navigate(routes.CAMERA_NAV) }} />
                </View>

            </View>
        </View>

    )
}
