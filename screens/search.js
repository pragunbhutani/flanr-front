import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBox from '../components/search.js';
import CustomButton from '../components/custom_button.js'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
});

export default class searchScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Search for Places'
	};
	render() {
	const { navigate } = this.props.navigation;
	return (
		<View style={styles.container}>
		<View style={{flex: 1}} >
			<SearchBox/>
		</View>
		<CustomButton
			onPress={() => this.props.navigation.goBack()}
			title='Go Back'
		/>
		</View>
	)};
}
