import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initialPosition: props.initialPosition,
      markerPosition: props.markerPosition
    }
  }

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 1.0421,
      }

      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000})

      this.watchID = navigator.geolocation.watchPossition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var lastRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }

        this.setState({initialPosition: lastRegion})
        this.setState({markerPosition: lastRegion})
      })
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID)
    }

	render() {
		return (
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
	);
	}
}

const styles = StyleSheet.create({
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
