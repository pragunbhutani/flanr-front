import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import NavigationBar from 'react-native-navbar';
import CustomButton from '../components/custom_button.js';
import PlaceTile from '../components/place_tile.js';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	navbar: {
		height: 60,
		elevation: 1,
		borderBottomWidth: 1,
		borderColor: '#BBB',
	},
	button: {
		position: 'absolute',
		bottom: 0,
		width: Dimensions.get('window').width
	}
});

export default class myPlaces extends React.Component {

    static navigationOptions = {
    	drawerLabel: 'My Places',
  	};

  	rightButtonConfig = {
  		title: 'Menu',
  		handler: () => this.props.navigation.navigate('DrawerToggle'),
	};

	titleConfig = {
  		title: 'My Places'
	};

    render() {
        return (
        	<View style={styles.container}>
        		<NavigationBar
					title={this.titleConfig}
					rightButton={this.rightButtonConfig}
					style={styles.navbar}
				/>
        		<View><PlaceTile /></View>
        		<View><PlaceTile /></View>
        		<View style={styles.button}>
        			<CustomButton
		                onPress={() => this.props.navigation.goBack()}
		                title='Go Home'
		            />
        		</View>
            </View>
        );
    }
}
