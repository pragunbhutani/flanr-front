import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBox from '../components/search.js';

export default class searchScreen extends React.Component {
	static navigationOptions = {
		title: "Search Screen"
	};
	render() {
	const { navigate } = this.props.navigation;
	return (
	<View style={{flex: 1}}>
    	<SearchBox/>
	</View>
	)};
}
