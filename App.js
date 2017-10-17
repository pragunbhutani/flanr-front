import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import mapScreen from './screens/map.js';
import searchScreen from './screens/search.js';

const AppView = StackNavigator({
	Map: { screen: mapScreen },
	Search: { screen: searchScreen }
});

export default class App extends React.Component {
	render() {
		return (
			<View style={{flex: 1, paddingTop: 24, backgroundColor: '#000'}}>
    			<AppView />
  		  	</View>
    	);
	}
}