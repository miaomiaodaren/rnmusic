import {StackNavigator} from 'react-navigation'
import Main from './index';
import Guide from './guide'
const Router = [
    {
        path: '/index',
        component: Main
    }, {
        path: '/guide',
        component: Guide
    }
]


const Route = StackNavigator({
    Home: {screen: Main}, // 登录页
    Guider: {
        screen: Guide,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
}, {
    initialRouteName: 'Guider',
})

export default Route