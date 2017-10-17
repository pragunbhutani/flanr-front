import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import CustomButton from '../components/custom_button.js'

export default class myPlaces extends React.Component {

    static navigationOptions = {
        drawerLabel: 'My Places',
    };

    render() {
        return (
            <CustomButton
                onPress={() => this.props.navigation.goBack()}
                title='Go Back'
            />
        );
    }
}
