import { View, Text } from 'react-native'
import React from 'react'
import HomeStarted from '../components/HomeScreen/HomeStarted'
import { plantsData } from '../data/Plants'
import { HomePlants, getHomePlants } from '../services/PlantsService'
import ListPlants from '../components/myplants/ListPlants'
import DetailsScreen from '../components/myplants/DetailsScreen'

export default function HomeScreen() {
  const [show, setShow] = React.useState(false)
  const [item, setItem] = React.useState('')

  function handleBackBtn() {
    setShow(false)
    return true
  }
  const handleClickedItem = (item) => {
    setItem(item)
    setShow(true)
  }
  return show ? <DrawShowItems item={item} handleBackBtn={handleBackBtn} /> : <HomeStarted handleClickedItem={handleClickedItem} />
}

const DrawShowItems = ({ item, handleBackBtn }) => {
  let data = getHomePlants(item)
  const [renderPreview, setRenderPreview] = React.useState(false)
  const [detailItem, setDetailItem] = React.useState(null)
  const handleBack = () => {
    setRenderPreview(false)
  }
  const handleItemClicked = (item) => {
    setDetailItem(item)
    setRenderPreview(true)

  }
  return renderPreview ? <DetailsScreen item={detailItem} handleBack={handleBack} /> : <ListPlants datalist={data} handleItemClicked={handleItemClicked} handleBackBtn={handleBackBtn} />
}