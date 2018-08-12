/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import {createStackNavigator,} from 'react-navigation';
import Route from './view/router';
import SplashScreen from 'react-native-splash-screen'


type Props = {};
export default class App extends Component<Props> {
	componentDidMount() {
		setTimeout(() => {
            SplashScreen.hide()
		}, 1000)
		
		
	}
	render() {
		return (
			<Route />
		);
	}
}
