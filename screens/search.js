import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import SearchBox from '../components/search.js';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
});

export default class searchScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: "Search for Places"
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
  			<SearchBox/>
  			<Button
      		onPress={() => this.props.navigation.goBack()}
      		title="Go Back"
  			/>
			</View>
	)};
}
