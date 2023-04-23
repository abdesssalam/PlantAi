import { View, Text, FlatList, Image } from 'react-native'


const DrawCard = ({ src, title, name, date }) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, width: '100%', padding: 10, marginTop: 15 }} >
            <Image source={src} style={{ width: 150, height: 150 }} />
            <View style={{ marginLeft: 15 }}>
                <Text style={{ flexWrap: 'wrap', fontSize: 22, color: '#30C67F', fontWeight: '800', textAlign: 'justify' }}>{title}</Text>
                <Text style={{ fontSize: 16, color: '#A3A3A3' }}>{name}</Text>
                <Text style={{ position: 'absolute', bottom: 10 }}>{date}</Text>
            </View>
            <Image style={{ position: 'absolute', top: 5, right: 5 }} source={require('../../assets/dots.png')} />

        </View>
    )
}

export default function MyPlantFilled({ myPlantData }) {



    return (



        <FlatList style={{ width: '95%' }} data={myPlantData} renderItem={({ item }) => <DrawCard src={item.src} title={item.title} name={item.name} date={item.date} />} />


    )
}
