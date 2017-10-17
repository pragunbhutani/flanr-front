import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class myPlaces extends React.Component {

    static navigationOptions = {
        drawerLabel: 'My Places',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go Back"
            />
        );
    }
}