import { TabNavigator } from 'react-navigation';
import MapScreen from '../components/MapScreen';
import MapList from '../components/MapList';
import Settings from '../components/Settings';

const Navigator = TabNavigator({
  Home: {
    screen: MapScreen,
  },
  List: {
    screen: MapList,
  },
  // Filters: {
  //   screen: Settings,
  // },
},
{
    tabBarOptions: {
       style: {
            marginTop: 24,
            backgroundColor: '#b71c1c'
       }
    }
},
// {
//     navigationOptions: {
//        tabBarVisible: false,
//     },
// }
);

export default Navigator;
