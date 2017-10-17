import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
	container: {
		height: 90,
		backgroundColor: '#fff',
		alignSelf: 'stretch',
		borderWidth: 1,
		borderColor: 'black',
		flexDirection: 'row'
	},
	tileImage: {
		height: 80,
		width: 80,
		margin: 5,
		borderWidth: 1,
		borderColor: 'red',
		alignSelf: 'flex-start'
	},
	tileInfo: {
		flex: 1,
		alignSelf: 'stretch',
		padding: 5,
		flexDirection: 'column'
	},
	tileTitle: {
		flex: 1,
		padding: 5,
		alignSelf: 'stretch',
		borderWidth: 1,
		borderColor: 'green',
	},
	tileDesc: {
		flex: 2,
		padding: 5,
		marginTop: 5,
		alignSelf: 'stretch',
		borderWidth: 1,
		borderColor: 'blue',
	}
});

export default class PlaceTile extends React.Component {

	render() {
		return (
			<View
				style={styles.container}
			>
				<View style={styles.tileImage}></View>
				<View style={styles.tileInfo}>
					<Text style={styles.tileTitle}>Place Name</Text>
					<Text style={styles.tileDesc}>Place Description here</Text>
				</View>
			</View>
		);
	}
}