import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  

export default class Main extends React.Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        fetch('http://47.96.114.115/api/user/userList').then(res => res.json()).then(res => {
            console.info(res, 2222222);
        })
    }

    render() {

        console.info(this.props, 88888);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js122212222</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
  