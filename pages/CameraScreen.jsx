'use strict';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { plantsData } from '../data/Plants';

export default class CameraScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back} androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}

                />
                <Image source={require('../assets/cameraRectangle.png')} style={{ width: 350, height: 350, alignSelf: 'center', position: 'absolute', top: 50 }} />
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={require('../assets/cameraPhotos.png')} />
                        <Text style={{ fontSize: 16, marginTop: 5 }}>Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        {/* <Text style={{ fontSize: 14 }}> SNAP </Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={require('../assets/cameraSnap.png')} />
                        <Text style={{ color: '#30C67F', fontSize: 16, marginTop: 5 }}>Snap Tips</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
        setTimeout(() => {
            let data = plantsData;
            let item = data[Math.floor(Math.random() * ((data.length - 1) + 1))]
            this.props.navigation.navigate('preview', { item: item })
        }, 1500)
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {

        backgroundColor: '#30C67F',
        width: 60,
        height: 60,
        borderRadius: 30


    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        paddingVertical: 10

    },
    btn: {
        flex: 1,
        alignItems: 'center'
    }

});