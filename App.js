import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SearchBox from './modules/search.js';
import Map from './modules/map.js';

export default class App extends React.Component {
	render() {
	return (
	<View style={{flex: 1}}>
		<View style={{flex: 1}}>
			<Map />
		</View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
