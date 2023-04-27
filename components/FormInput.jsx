import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View, StyleSheet, TextInput } from 'react-native'

function FormInput({ icon, value, placeholder, secure, action, Objkey }) {
    const handleChange = (val) => {
        action(val, Objkey)

    }
    return (
        <View style={styles.inputWrapper}>
            <FontAwesomeIcon style={styles.inpuIcon} icon={icon} />
            <TextInput secureTextEntry={secure} style={styles.input} value={value} placeholder={placeholder} onChangeText={handleChange} />
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#9b8f8f',
        borderWidth: 2,
        width: '80%',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 8,
    },
    inpuIcon: {
        padding: 10,
        color: '#9b8f8f'
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        marginLeft: 10,
        fontSize: 18,
        width: '90%',
        // backgroundColor: 'red'
    },
})