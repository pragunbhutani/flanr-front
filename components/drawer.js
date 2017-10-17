import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from '../utils/navigation';
import NavBarItem from './common/NavBarItem';
import SettingsScreen from '../screens/settingsScreen';

const getDrawerItem = navigation => (
  <NavBarItem
    onPress={() => {
      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
  />
);

const Drawer = DrawerNavigator({
  SettingsScreen: { screen: SettingsScreen },
}, getDrawerConfig(300, 'left', 'SettingsScreen'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('Settings', '#000', 'white', getDrawerItem(navigation));

export default Drawer;