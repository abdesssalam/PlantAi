import React from 'react'
import DetailsScreen from './DetailsScreen'
import ListPlants from './ListPlants'

export default function ShowListPlants({ data }) {

    const [renderPreview, setRenderPreview] = React.useState(false)
    const [detailItem, setDetailItem] = React.useState(null)
    function handleback() {
        return true;
    }
    const handleBack = () => {
        setRenderPreview(false)
    }
    const handleItemClicked = (item) => {
        setDetailItem(item)
        setRenderPreview(true)

    }
    return renderPreview ? <DetailsScreen item={detailItem} handleBack={handleBack} /> : <ListPlants datalist={data} handleItemClicked={handleItemClicked} handleBackBtn={handleback} />
}