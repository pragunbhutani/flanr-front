import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SearchBox from './modules/search.js';
import Map from './modules/map.js';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search: '',
			initialPosition: {
				latitude: 0,
				longitude: 0,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
			markerPostion: {
				latitude: 0,
				longitude: 0,
			}
		};
	}
	render() {
	return (
	<View style={{flex: 1}}>
		<View style={{flex: 1}}>
			<Map initialPosition={ this.state.initialPosition } markerPosition={ this.state.markerPostion } />
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
