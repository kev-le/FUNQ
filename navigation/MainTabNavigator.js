import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GroupsScreen from '../screens/GroupsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StartupScreen from '../screens/StartupScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import LandingScreen from '../screens/LandingScreen';
import TagScreen from '../screens/TagScreen';
import GroupMemberScreen from '../screens/GroupMemberScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Chatbot: ChatbotScreen,
  Landing: LandingScreen,
  Tags: TagScreen,
  GroupMember: GroupMemberScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

const GroupsStack = createStackNavigator({
  Groups: GroupsScreen,
});

GroupsStack.navigationOptions = {
  tabBarLabel: 'Groups',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const GroupMemberStack = createStackNavigator({
  GroupMember: GroupMemberScreen,
});

GroupMemberScreen.navigationOptions = {
  tabBarLabel: 'GroupMember',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const StartingStack = createStackNavigator({
  Starting: StartupScreen,
});

export default createBottomTabNavigator({
  HomeStack,
  GroupsStack,
  SettingsStack,
});
