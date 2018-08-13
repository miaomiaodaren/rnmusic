import React from 'react';
import {View, Text, AsyncStorage, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window')

export default class Guide extends React.Component{
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons loop={false}>
                <View style={styles.slide1}>
                    <Image source={ require('./images/guide1.jpg')} style={{width: width, height: height}}/>
                </View>
                <View style={styles.slide2}>
                    <Image source={require('./images/guide2.jpg')} style={{width: width, height: height}}/>
                </View>
                <View style={styles.slide3}>
                    <Image source={require('./images/guide3.jpg')} style={{width: width, height: height}}/>
                    <View style={styles.goMin}>
                        <Text>开启旅程</Text>
                    </View>
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
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    goMin: {
        
    }
})