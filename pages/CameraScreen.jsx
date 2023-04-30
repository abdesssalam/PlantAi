'use strict';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { plantsData } from '../data/Plants';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { getSingleItem } from '../services/PlantsService';
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
                    <TouchableOpacity style={styles.btn} onPress={this.handleOpenGallery}>
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

            this.uploadImage(data.uri, 'image/jpeg')

        }
        // setTimeout(() => {
        //     let data = plantsData;
        //     let item = data[Math.floor(Math.random() * ((data.length - 1) + 1))]
        //     this.props.navigation.navigate('preview', { item: item })
        // }, 1500)
    };
    handleOpenGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(img => {

            console.log('send data....')
            this.uploadImage(img.path, img.mime)
        })
    }

    uploadImage = async (url, mime) => {

        const formData = new FormData();
        formData.append('remark', 'remark')
        formData.append('file', {
            uri: url,
            name: `image-${new Date().getUTCMilliseconds().toString()}`,
            type: mime,
        })
        try {


            const res = await axios({
                method: 'POST',
                url: 'https://061f-160-176-197-152.ngrok-free.app/file/upload/',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            let item = getSingleItem(res.data.Name);
            if (item !== 'undefined') {
                this.props.navigation.navigate('preview', { item: item })
            }

            console.log(res.data.Name)
        } catch (err) {
            console.log(err)
        }


    }
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