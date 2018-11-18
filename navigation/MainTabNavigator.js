import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/FontAwesome';
import TabBarIcon from '../components/TabBarIcon';
import RepairScreen from '../screens/RepairScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LocationScreen from '../screens/Repair/LocationScreen';
import TestMap from '../screens/Repair/TestMap';

const HomeStack = createStackNavigator({
  Home: RepairScreen,
  Location: LocationScreen,
  Test: TestMap
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Instant Repair',
  tabBarIcon: ({tintColor}) => (
    <Icon
        name="wrench"
        color={tintColor}
        size={24}
    />
)
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'My Profile',
  tabBarIcon: ({tintColor}) => (
    <Icon
        name="user"
        color={tintColor}
        size={24}
    />
)
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({tintColor}) => (
    <Icon
        name="exclamation-circle"
        color={tintColor}
        size={24}
    />
)
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
