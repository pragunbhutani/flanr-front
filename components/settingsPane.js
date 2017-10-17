import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  settingsContainer: {
    paddingTop: 24,
    backgroundColor: '#000',
  },
  settingsBody: {
    flex: 1,
    minHeight: 100,
    backgroundColor: '#999'
  }
});

export default class SettingsPane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.settingsContainer}>
        <View
          style={styles.settingsBody}>
          <Text>
            Option 1
          </Text>
          <Text>
            Control 2
          </Text>
          <Text>
            Param 3
          </Text>
        </View>
      </View>
    );
  }
}