import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SavePlace from '../components/save_place.js';

export default class mapScreen extends React.Component {

    static navigationOptions = {
		title: "Map Screen"
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
	        <View style={{flex: 1}}>
	            <View style={{flex: 1}}>

	                <MapView
	                    PROVIDER={PROVIDER_GOOGLE}
	                    style={styles.map}
	                    initialRegion={{
	                        latitude: 37.78825,
	                        longitude: -122.4324,
	                        latitudeDelta: 0.0922,
	                        longitudeDelta: 0.0421,
	                    }}>

	                    <MapView.Marker
	                        coordinate={{
	                            latitude: 37.78825,
	                            longitude: -122.4324,
	                        }}>

	                        <View style={styles.radius}>
	                            <View style={styles.marker}></View>
	                        </View>

	                    </MapView.Marker>
	                </MapView>
	            </View>
	            <View style={{flex: 0.13}}>
	                <SavePlace onPress={() => navigate('Search')} />
	            </View>
	    	</View>
		)
	};
}

const styles = StyleSheet.create({
 	container: {
    	flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
  	},
  	menuButton: {
  		backgroundColor: '#fff',
  		borderWidth: 1,
  		borderColor: '#000',
  		right: 10,
  	},
	map: {
	    position: 'absolute',
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	},
  	radius: {
	    height: 50,
	    width: 50,
	    borderRadius: 50 / 2,
	    overflow: 'hidden',
	    backgroundColor: 'rgba(0, 122, 255, 0.1)',
	    borderWidth: 1,
	    borderColor: 'rgba(0, 122, 255, 0.3)',
	    alignItems: 'center',
	    justifyContent: 'center'
  	},
  	marker: {
	    height: 20,
	    width: 20,
	    borderWidth: 3,
	    borderColor: 'white',
	    borderRadius: 20 / 2,
	    overflow: 'hidden',
	    backgroundColor: '#007AFF'
  	}
});