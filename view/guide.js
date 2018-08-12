import React from 'react';
import {View, Text, AsyncStorage, StyleSheet, Image, Dimensions, Button, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window')
export default class Guide extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }
    
    goMain = () => {
        const { navigate } = this.props.navigation;
        navigate('Home', { name: 'Jane' })
    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons loop={false}>
                <View style={styles.slide1}>
                    <Image source={require('./images/guide1.jpg')} style={{width: width, height: height}}/>
                </View>
                <View style={styles.slide2}>
                    <Image source={require('./images/guide2.jpg')} style={{width: width, height: height}}/>
                </View>
                <View style={styles.slide3}>
                    <ImageBackground style={{width: width, height: height}} source={require('./images/guide3.jpg')} resizeMode='cover'>
                        <View style={styles.button}>
                            <Button color='#3385ff'  title='开启应用' onPress={this.goMain} />
                        </View>
                    </ImageBackground>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
        position: 'relative',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        width: width / 2,
        height: 120,
        position: 'absolute',
        bottom: 60,
        left: width / 4
    }
})