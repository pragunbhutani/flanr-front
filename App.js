import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
      	<View style={{flex: 0.2}}>
        <TextInput
		  style={{flex: 1, borderColor: 'gray', borderWidth: 1}}
		  value={"Nearby Places"}
		/>
		</View>
      	<View style={{flex: 0.8}}>
	    <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} >
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          >
              <View style={styles.radius}>
                <View style={styles.marker}></View>
              </View>
          </MapView.Marker>
        </MapView>
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
});
