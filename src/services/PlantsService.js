import { plantsData, userPlants } from '../data/Plants'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import urls from '../constants/urls';
const BASE_URL = urls.USER_API

export const getHomePlants = (item) => {
    return plantsData.filter(plant => plant.key_facts['Type de plante'].toLowerCase() === item.toLowerCase())
}

export const getDiseaseData = () => {
    return plantsData.filter((p, i) => (i > 15 || i <= 27));
}

export const getUserPlants = async () => {
    let data = await getPlants();

    let toShow = []

    data.forEach(d => {

        let item = plantsData.find(pl => pl.general.name.toUpperCase() == d.name.replace("_", " ").toUpperCase())
        item = { ...item, ...{ Condition: d.condition, img: d.img, plant_id: d.id, is_garden: d.is_garden, created_at: d.created_at } }

        toShow.push(item)
    })

    return toShow
}
export const getUsergarden = async () => {
    let data = await getPlants();
    data = data.filter(d => d.is_garden)
    let toShow = []

    data.forEach(d => {
        let item = plantsData.find(pl => pl.general.name.toUpperCase() == d.name.toUpperCase())
        item = { ...item, ...{ Condition: d.condition, img: d.img, plant_id: d.id, is_garden: d.is_garden } }

        toShow.push(item)
    })

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
        console.log(response)
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
export const MovePlantToGarden = async (id) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }

        await axios.patch(`${BASE_URL}/plants/${id}/to-garden`, {}, { headers: { Authorization: `Bearer ${token}` } })
            .then(data => {
                console.log(data.data)
            }).catch(er => {
                console.log("move plant err :" + er)
                // console.log(er.request)
            });
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
export const removePlantFromGarden = async (id) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }

        await axios.patch(`${BASE_URL}/plants/${id}/from-garden`, {}, { headers: { Authorization: `Bearer ${token}` } })
            .then(data => {
                console.log(data.data)
            }).catch(er => {
                console.log("move plant err :" + er)
                // console.log(er.request)
            });
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const add_note_service = async (plant_id, text) => {
    console.log('start add note')
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const response = await axios.post(`${BASE_URL}/note`, { plant_id, text }, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log("res")
                console.log(res)
                console.log("res")
                return res
            }).catch(er => {
                console.log("er")
                console.log(er)
                console.log("er")
            })
        console.log(response?.data)
        return response?.data;
    } catch (ex) {

    }
}
export const edit_note_service = async (note_id, text) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const response = await axios.post(`${BASE_URL}/note/${note_id}`, { text }, { headers: { Authorization: `Bearer ${token}` } })
        console.log('edit note')
        console.log(response)
        console.log('edit note')
        return response?.data;
    } catch (ex) {

    }
}
export const remove_note_service = async (note_id) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const response = await axios.delete(`${BASE_URL}/note/${note_id}`, { headers: { Authorization: `Bearer ${token}` } })
        return response?.data;
    } catch (ex) {

    }
}
export const get_notes_service = async (plant_id) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const response = await axios.get(`${BASE_URL}/notes/${plant_id}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                return res
            }).catch(er => {

                console.log(er)
                throw er
            })
        return response?.data;
    } catch (ex) {

    }
}

export const get_all_plants = () => {
    let classes = ['Apple', 'Bell Pepper', 'Eggplant', 'Grape', 'Orange', 'Peach', 'Potato', 'Tomato', 'Mango', 'Broad Bean', 'Corn Maize']
    let plant = plantsData.filter(pl => {
        if (classes.includes(pl.general.name)) {
            return pl;
        }
    });
    return plant.map(pl => {
        let obj = { name: pl.general.name, fr_name: pl.general.fr_name, img: pl.general.image }
        return obj
    })

}