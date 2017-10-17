import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MapScreen from './screens/map.js';
import MyPlacesScreen from './screens/myPlaces.js';
import SearchScreen from './screens/search.js';
import CacheStore from 'react-native-cache-store';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 24,
		backgroundColor: '#000'
	},
});

const MyApp = DrawerNavigator({
	Home: {
		screen: MapScreen
	},
	MyPlaces: {
		screen: MyPlacesScreen
	},
	Search: {
		screen: SearchScreen
	}
});

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<MyApp />
			</View>
		);
	}
}
