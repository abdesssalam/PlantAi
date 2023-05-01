import { plantsData, userPlants } from '../data/Plants'

export const getHomePlants = (item) => {
    return plantsData.filter(plant => plant.key_facts['plant type'] === item)
}

export const getDiseaseData = () => {
    return plantsData.filter((p, i) => (i > 15 || i <= 27));
}

export const getUserGarden = () => {
    let data = userPlants.filter(d => d.user == 1)

    let toShow = []

    data.forEach(d => {
        let item = plantsData.find(pl => pl.general.name.toUpperCase() == d.name.toUpperCase())
        item = { ...item, ...{ img: d.img } }
        console.log(item.img)
        toShow.push(item)
    })
    return toShow
}

export const getSingleItem = (name) => {

    name = name.includes("_") ? name.replace("_", " ") : name
    console.log(plantsData.length)
    return plantsData.find(plant => plant.general.name.toLocaleLowerCase() === name.toLocaleLowerCase())
}

export const SaveUserPlant = (id, img, name) => {
    name = name.includes("_") ? name.replace("_", " ") : name
    userPlants.push({
        user: id,
        img: img,
        name: name
    })
}