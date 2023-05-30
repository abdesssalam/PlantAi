import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MovePlantToGarden, deletePlant, getPlants, removePlantFromGarden } from '../../services/PlantsService'
import { useNavigation, useRoute } from '@react-navigation/native'
import routes from '../../constants/routes';


export default function MyPlantMenu({ hide, windowHeight, plant, refresh_data }) {

    const navigation = useNavigation();
    const handleMoveToGatden = async () => {
        if (plant.is_garden) {
            console.log("ggg")
            await removePlantFromGarden(plant.plant_id)
            await refresh_data()
        } else {
            await MovePlantToGarden(plant.plant_id)
        }


        await hide()
    }

    const go_to_notes = () => {
        navigation.navigate(routes.NOTE_SCREEN, { plant_id: plant.plant_id })
    }

    const delete_plant = async () => {
        await deletePlant(plant.plant_id)
        await refresh_data()
        await hide()


    }
    const items = [
        {
            id: 1,
            title: plant.is_garden ? 'retirer du jardin' : 'Enregistrer dans le jardin',
            color: '#30C67F',
            action: async () => { await handleMoveToGatden() }
        },
        {
            id: 3,
            title: 'Remarque',
            color: '#30C67F',
            action: go_to_notes
        },
        {
            id: 4,
            title: 'Supprimer',
            color: '#EC4F4F',
            action: delete_plant
        },
        {
            id: 5,
            title: 'Annuler',
            color: '#30C67F',
            action: hide
        },
    ]

    const showItems = items.map((item) => {
        return (
            <TouchableOpacity key={item.title} onPress={item.action} style={{ borderBottomWidth: 1, borderBottomColor: '#6666', width: '100%', paddingVertical: 8, alignItems: 'center' }}>
                <Text key={item.title} style={{ fontWeight: '700', color: item.color, fontSize: 22 }}>
                    {item.title}</Text>
            </TouchableOpacity>
        )
    })
    return (
        <View style={{ alignSelf: 'center', height: windowHeight * 0.45, backgroundColor: '#fff', width: '100%', alignItems: 'center', padding: 15 }}>

            {showItems}

        </View>
    )
}