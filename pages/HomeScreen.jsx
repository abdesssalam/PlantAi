import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Card from '../components/Card'


export default function HomeScreen() {
  const [search, setSearch] = useState('')

  let popularPlantsData = [
    {
      id: 1,
      title: 'Vegetables',
      img: require('../assets/vegetables.jpg')
    },
    {
      id: 2,
      title: 'Fruits',
      img: require('../assets/fruits.jpg')
    },
    {
      id: 3,
      title: 'Tree',
      img: require('../assets/tree.jpg')
    },
    {
      id: 4,
      title: 'Toxic Plants',
      img: require('../assets/toxicPlants.jpg')
    },
    {
      id: 5,
      title: 'Flowers',
      img: require('../assets/flowers.jpg')
    },
    {
      id: 6,
      title: 'Leaf Plants',
      img: require('../assets/leafPlants.jpg')
    }
  ]

  let guidData = [
    {
      text: 'How to identify plants easily with PlantAi',
      img: require('../assets/cardBG1.png')
    },
    {
      text: 'Why the planet needs insects',
      img: require('../assets/Guid2.png')
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <FontAwesomeIcon style={styles.inpuIcon} icon={faSearch} />
        <TextInput style={styles.input} value={search} placeholder={'search plants'} />
      </View>
      <Text style={{
        width: '95%',
        fontFamily: 'Poppins',
        color: '#666666',
        fontSize: 20,
        marginVertical: 5
      }}>
        Good Afternoon, <Text style={{ color: '#000' }}>Adil</Text>
      </Text>
      <View style={{ width: '95%', marginVertical: 15 }}>
        <Text style={{ fontFamily: 'Poppins', fontWeight: '800', color: '#000', fontSize: 18 }}>Get Started</Text>
        {/* @TODO: REPLACE WITH SCROLLABLE LIST VIEW */}
        <FlatList horizontal={true} data={guidData} renderItem={({ item }) => <Card text={item.text} imgSrc={item.img} width={260} height={130} />} />
        {/* <Card
          imgSrc={require('../assets/cardBG1.png')}
          text={'How to identify plants easily with PlantAi'} width={260} height={130} /> */}
      </View>
      <View style={{ width: '95%' }}>
        <Text style={{ fontFamily: 'Poppins', fontWeight: '800', color: '#000', fontSize: 18 }}>Popular Plants</Text>
        {/* @TODO: REPLACE WITH SCROLLABLE LIST VIEW */}
        <FlatList numColumns={2} data={popularPlantsData} renderItem={({ item }) => <Card text={item.title} imgSrc={item.img} height={80} width={200} />} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#EDFAF7'
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderColor: '#9b8f8f',
    // borderWidth: 2,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginVertical: 8,
  },
  inpuIcon: {
    padding: 10,
    color: '#666666'
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#666666',
    marginLeft: 10,
    fontSize: 18,
  },
})