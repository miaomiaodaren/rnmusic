import React from 'react';
import {StackNavigator} from 'react-navigation'
import TabNav from './tabNavigator'
import Guide from './guide'
const Router = [
    {
        path: '/guide',
        component: Guide
    }
]



const Route = StackNavigator({
    Main: {
        screen: TabNav,
        navigationOptions: ({navigation}) => ({
            header: null,
        })
    }, 
    Guider: {
        screen: Guide,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
}, {
    initialRouteName: 'Guider'
})


export default Route