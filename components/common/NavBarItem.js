import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

class NavBarItem extends Component {
  render() {
    const { iconName, onPress } = this.props;
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 20 }}
        onPress={() => onPress()}
      >
        <Text>Menu</Text>
      </TouchableOpacity>

    );
  }
}

NavBarItem.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default NavBarItem;