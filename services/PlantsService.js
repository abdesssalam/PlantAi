import { plantsData, userPlants } from '../data/Plants'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = 'http://10.0.2.2:8000/api'

export const getHomePlants = (item) => {
    return plantsData.filter(plant => plant.key_facts['Plant Type'].toLowerCase() === item.toLowerCase())
}

export const getDiseaseData = () => {
    return plantsData.filter((p, i) => (i > 15 || i <= 27));
}

export const getUserGarden = async () => {
    let data = await getPlants();

    let toShow = []

    data.forEach(d => {

        let item = plantsData.find(pl => pl.general.name.toUpperCase() == d.name.toUpperCase())
        item = { ...item, ...{ Condition: d.Condition, img: d.img } }
        console.log(item)
        toShow.push(item)
    })
    console.log(toShow.length)
    return toShow
}

export const getSingleItem = (name) => {

    name = name.includes("_") ? name.replace("_", " ") : name
    console.log(plantsData.length)
    return plantsData.find(plant => plant.general.name.toLocaleLowerCase() === name.toLocaleLowerCase())
}

export const SaveUserPlant = (id, img, name, condition) => {
    name = name.includes("_") ? name.replace("_", " ") : name
    userPlants.push({
        user: id,
        img: img,
        name: name,
        Condition: condition
    })

}

//API

export const getPlants = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const response = await axios.get(`${BASE_URL}/plants`, { headers: { Authorization: `Bearer ${token}` } });
        const plants = response.data.plants;
        return plants;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const createPlant = async (name, condition, img) => {
    try {
        const token = await AsyncStorage.getItem('token');
        console.log("createPlant response")
        console.log(token)
        console.log("createPlant response")
        if (!token) {
            throw new Error('No token found');
        }
        const response = await axios.post(`${BASE_URL}/plants`, { name, condition, img }, { headers: { Authorization: `Bearer ${token}` } });

        const plant = response.data.plant;
        return plant;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const updatePlant = async (id, name, condition, img) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const response = await axios.put(`${BASE_URL}/plants/${id}`, { name, condition, img }, { headers: { Authorization: `Bearer ${token}` } });
        const plant = response.data.plant;
        return plant;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const deletePlant = async (id) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        await axios.delete(`${BASE_URL}/plants/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};