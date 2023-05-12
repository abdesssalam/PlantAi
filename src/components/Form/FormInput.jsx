import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View, StyleSheet, TextInput } from 'react-native'
import { normalizeFont } from '../../constants/responsive'

function FormInput({ icon, value, placeholder, secure, action, Objkey }) {
    const handleChange = (val) => {
        action(val, Objkey)

    }
    return (
        <View style={styles.inputWrapper}>
            <FontAwesomeIcon style={styles.inpuIcon} icon={icon} />
            <TextInput secureTextEntry={secure} style={styles.input} value={value} placeholder={placeholder} placeholderTextColor="#6666" onChangeText={handleChange} />
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
        paddingHorizontal: normalizeFont(10),
        borderRadius: 15,
        marginVertical: normalizeFont(5),
    },
    inpuIcon: {
        padding: normalizeFont(8),
        color: '#9b8f8f'
    },
    input: {

        paddingBottom: normalizeFont(8),
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        marginLeft: normalizeFont(10),
        fontSize: normalizeFont(14),
        width: '90%',
    },
})