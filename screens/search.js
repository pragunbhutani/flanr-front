import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import NavigationBar from 'react-native-navbar';
import SearchBox from '../components/search.js';
import CustomButton from '../components/custom_button.js'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		elevation: 0
	},
	navbar: {
		height: 60,
		elevation: 1,
		borderBottomWidth: 1,
		borderColor: '#999',
	},
	button: {
		position: 'absolute',
		bottom: 0,
		width: Dimensions.get('window').width
	}
});

export default class searchScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Search for Places'
	};

	rightButtonConfig = {
		title: 'Menu',
		handler: () => this.props.navigation.navigate('DrawerToggle'),
	};

	titleConfig = {
  		title: 'Search for Places'
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<NavigationBar
					title={this.titleConfig}
					rightButton={this.rightButtonConfig}
					style={styles.navbar}
				/>
				<View style={{flex: 1}} >
					<SearchBox/>
				</View>
				<View style={styles.button}>
					<CustomButton
						onPress={() => this.props.navigation.goBack()}
						title='Go Home'
					/>
				</View>
			</View>
		)
	};
}
