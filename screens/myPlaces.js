import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import CustomButton from '../components/custom_button.js';
import PlaceTile from '../components/place_tile.js';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
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
        	<View>
        		<NavigationBar
					title={this.titleConfig}
					rightButton={this.rightButtonConfig}
				/>
        		<View><PlaceTile /></View>
        		<View><PlaceTile /></View>
	            <CustomButton
	                onPress={() => this.props.navigation.goBack()}
	                title='Go Back'
	            />
            </View>
        );
    }
}
