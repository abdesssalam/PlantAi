'use strict';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { plantsData } from '../data/Plants';
import { store } from '../redux/store';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { SaveUserPlant, createPlant, getSingleItem } from '../services/PlantsService';
import ImageCropPicker from 'react-native-image-crop-picker';



export default class CameraScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showIndicator: false,
            user: store.getState().user
        }

    }
    componentDidMount() {

        console.log(this.state.user);
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.showIndicator == false &&
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
                }
                {this.state.showIndicator && <ActivityIndicator size="large" style={{ position: 'absolute', top: 150, left: 150 }} />}

                <Image source={require('../assets/cameraRectangle.png')} style={{ width: 350, height: 350, left: 25, position: 'absolute', top: 50 }} />
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
            const data = await this.camera.takePictureAsync({ quality: 0.5, base64: true, width: 300 });
            const croppedImage = await ImageCropPicker.openCropper({
                path: data.uri,
                width: 350,
                height: 350,
                cropping: true,
                cropperCircleOverlay: false,
                showCropGuidelines: true,
                showCropFrame: true,
                initialCropRect: { // The initial crop rectangle in pixels
                    originX: 50, // The x-coordinate of the top-left corner of the rectangle
                    originY: 50, // The y-coordinate of the top-left corner of the rectangle
                    width: 350, // The width of the rectangle
                    height: 350 // The height of the rectangle
                }
            })
            this.uploadImage(croppedImage.path, 'image/jpeg')

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
        }).catch(err => console.log(err))
    }

    uploadImage = async (url, mime) => {
        this.setState({ showIndicator: true })
        const formData = new FormData();
        let y = new Date()
        let name = `image-${this.state.user.id}-${"" + y.getDay() + y.getFullYear() + y.getUTCMilliseconds()}`
        formData.append('remark', 'remark')
        formData.append('file', {
            uri: url,
            name: name,
            type: mime,
        })
        try {



            const res = await axios({
                method: 'POST',
                url: 'https://061f-160-176-197-152.ngrok-free.app/file/upload/',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            console.log(res.data)
            this.setState({ showIndicator: false })
            let item = getSingleItem(res.data.Name);
            item = { ...item, ...res.data }
            console.log("medel data===")
            console.log(res.data)
            if (item !== 'undefined') {
                const plant = await createPlant(res.data.Name, res.data.Condition, res.data['image_url'])
                console.log("plaaant API")
                console.log(plant)
                console.log("plaaant API")

                SaveUserPlant(this.state.user.id, res.data['image_url'], item.general.name, res.data['Condition'])
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


