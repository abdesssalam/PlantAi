import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchScreen() {
    const [search, setSearch] = useState('')
    return (
        <View>
            <Text>search</Text>
        </View>
    )
}
