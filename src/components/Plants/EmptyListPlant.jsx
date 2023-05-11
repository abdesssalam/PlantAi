import { View, Text, Image } from 'react-native'
import FormBtn from '../Form/FormBtn'



export default function MyPlantEmpty() {
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
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#000', marginBottom: 5 }}>
                        This space is empty
                    </Text>
                    <Text style={{ color: '#666666', marginBottom: 10, fontSize: 18 }}>Add a plant to get a care plan!</Text>
                    <FormBtn text={'add first plant'} />
                </View>

            </View>
        </View>

    )
}
