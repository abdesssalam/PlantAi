'use strict';
import '../../../ignoreWarnings'
import React, { Component } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import LottieView from 'lottie-react-native'
import { store } from '../../redux/store';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { SaveUserPlant, createPlant, getSingleItem } from '../../services/PlantsService';
import ImageCropPicker from 'react-native-image-crop-picker';
import routes from '../../constants/routes';
import urls from '../../constants/urls';
import { recordVideo } from 'react-native-camera-hooks/src/recordVideo';



export default class CameraScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showIndicator: false,
            user: store.getState().user
        }

    }

    componentDidMount() {
        console.log(this.props.route.params)
    }

    render() {
        if (this.state.showIndicator) {
            return (
                //scan_effect_ing
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <LottieView source={require('../../assets/scan_effect_ing.json')} autoPlay loop />

                </View>
            )
        }
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


                <Image source={require('../../assets/cameraRectangle.png')} style={{ width: 350, height: 350, left: 25, position: 'absolute', top: 50 }} />
                <View style={styles.footer}>

                    <TouchableOpacity style={styles.btn} onPress={this.handleOpenGallery}>
                        <Image source={require('../../assets/cameraPhotos.png')} />
                        <Text style={{ fontSize: 16, marginTop: 5 }}>Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        {/* <Text style={{ fontSize: 14 }}> SNAP </Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={require('../../assets/cameraSnap.png')} />
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
        let name = `image-${this.state.user.id}-${"" + y.getDay() + y.getMonth() + y.getFullYear() + y.getUTCMilliseconds()}`
        formData.append('remark', 'remark')
        formData.append('file', {
            uri: url,
            name: name,
            type: mime,
        })
        formData.append("type", this.props.route.params.type)
        if (this.props.route.params.type === "leaf") {
            console.log("lld")
            formData.append("name", this.props.route.params.name)
        }
        console.log("[+] to API 2")
        console.log(formData)
        //start commant senser to AI API
        try {
            const res = await axios({
                method: 'POST',
                url: urls.AI_API + '/file/upload/',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(res => {
                console.log("resss")
                console.log(res)
                console.log("resss")
                return res;
            }).catch(er => {
                console.log("er")
                console.log(er)
                console.log("er")
            })
            console.log("medel data===")
            console.log(res.data)
            console.log("medel data===")


            this.props.navigation.navigate(routes.CHOOSE_SCREEN, { data: res.data })
            this.setState({ showIndicator: false })

            //end sent to AI API

            // let item = getSingleItem(res.data.Name);
            // item = { ...item, ...res.data }


            // if (item !== 'undefined') {
            //     const plant = await createPlant(res.data.Name, res.data.Condition, res.data['image_url'])
            //     console.log("plaaant API")
            //     console.log(plant)
            //     console.log("plaaant API")

            //     SaveUserPlant(this.state.user.id, res.data['image_url'], item.general.name, res.data['Condition'])
            //     this.props.navigation.navigate(routes.DETAILS, { item: item })
            // }


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


