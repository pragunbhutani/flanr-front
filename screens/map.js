import React from 'react';
import { StyleSheet, View, Button, Alert, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomButton from '../components/custom_button.js';
import NavigationBar from 'react-native-navbar';

export default class mapScreen extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			initialPosition: {
				latitude: 0,
				longitude: 0,
				latitudeDelta: 0,
				longitudeDelta: 0,
			},
			markerPosition: {
				latitude: 0,
				longitude: 0,
			}
		};
	}

  	static navigationOptions = {
    	drawerLabel: 'Map',
  	};

  	rightButtonConfig = {
  		title: 'Menu',
  		handler: () => this.props.navigation.navigate('DrawerToggle'),
	};

	titleConfig = {
  		title: 'Flanr'
	};

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }

      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000})

  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex: 1}}>
				<NavigationBar
					title={this.titleConfig}
					rightButton={this.rightButtonConfig}
				/>
				<View style={{flex: 1}}>
          <MapView
            PROVIDER={PROVIDER_GOOGLE}
            style={styles.map}
            region={ this.state.initialPosition } >
            <MapView.Marker
              coordinate={ this.state.markerPosition } >
              <View style={styles.radius}>
                <View style={styles.marker}></View>
              </View>
            </MapView.Marker>
          </MapView>
				</View>
				<View style={styles.button}>
					<CustomButton title='SAVE PLACE' onPress={() => navigate('Search')} />
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
		justifyContent: 'center'
	},
	button: {
		position: 'absolute',
		bottom: 0,
		width: Dimensions.get('window').width
	},
	menuButton: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
		right: 10
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
