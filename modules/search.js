import React from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}

	render() {
		return (
		<TextInput
			placeholder="Search Nearby Places.."
			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			onChangeText={(text) => this.setState({text})}
			value={this.state.text}
		/>
	);
	}
}
