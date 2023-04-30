import { plantsData } from '../data/Plants'

export const getHomePlants = (item) => {
    return plantsData.filter(plant => plant.key_facts['plant type'] === item)
}

export const getDiseaseData = () => {
    return plantsData.filter((p, i) => (i > 15 || i <= 27));
}

export const getUserGarden = () => {
    return plantsData
}

export const getSingleItem = (name) => {

    name = name.includes("_") ? name.replace("_", " ") : name
    console.log(plantsData.length)
    return plantsData.find(plant => plant.general.name.toLocaleLowerCase() === name.toLocaleLowerCase())
}