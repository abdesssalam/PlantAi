import Toast from 'react-native-easy-toast'
import COLORS from '../../constants/COLORS'

import { StyleSheet } from 'react-native'
import responsive, { normalizeFont } from '../../constants/responsive'
import { useRef } from 'react'

import { View, Text } from 'react-native'
import React from 'react'
import values from '../../constants/values'

const ToastComponent = React.forwardRef((props, ref) => {
    const styles = StyleSheet.create({
        toastStyle: {
            backgroundColor: props.type === values.TOAST_VALUES.TYPE.SUCSESS ? COLORS.GREEN_LIGHT : (props.type === values.TOAST_VALUES.TYPE.DANGER ? '#EC4F4F' : '#F5D256'),
            width: responsive.WINDOW_WIDTH * 0.75,
            position: 'absolute',
            bottom: responsive.WINDOW_HEIGHT * 0.01,
            left: responsive.WINDOW_WIDTH * 0.1,
            alignItems: 'center'
        },
        textStyle: {
            fontSize: normalizeFont(18),
            color: '#fff',
            textTransform: 'capitalize'
        }
    })
    return (
        <Toast ref={ref} style={styles.toastStyle} textStyle={styles.textStyle} opacity={0.8} />
    )
})

export default ToastComponent