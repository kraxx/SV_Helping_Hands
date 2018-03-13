import { TabNavigator } from 'react-navigation';
import MapScreen from '../components/MapScreen';
import MapList from '../components/MapList';
import Settings from '../components/Settings';

const Navigator = TabNavigator(
	{
		Home: {
			screen: MapScreen,
		},
		List: {
			screen: MapList,
		},
		Settings: {
			screen: Settings,
		},
	},
);

export default Navigator;
