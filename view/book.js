import React from 'react'
import {View, Text} from 'react-native'

export default class Books extends React.Component{
    static navigationOptions = {
        tabBarLabel: '书架',
    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>i am is Book</Text>
            </View>
        )
    }
}