import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

function switchView() {
}

export default class SavePlace extends React.Component {
	render() {
		return (
		<TouchableOpacity onPress={switchView} style={styles.button}>
			<View style={styles.textBox}>
				<Text style={styles.text}>SAVE PLACE</Text>
			</View>
		</TouchableOpacity>
	);
	}
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		backgroundColor: "#2AA198"
	},
	textBox: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		fontSize: 22,
		color: "#FFFFFF",
		textAlign: 'center'
	}
});
