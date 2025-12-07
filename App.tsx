/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from './src/utils/colors';
import HomeScreen from './src/screens/HomeScreen';
import CastScreen from './src/screens/CastScreen';
import ScanScreen from './src/screens/ScanScreen';
import HarbourScreen from './src/screens/HarbourScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tide') {
              iconName = 'light'; // lighthouse
            } else if (route.name === 'Cast') {
              iconName = 'satellite'; // satellite
            } else if (route.name === 'Scan') {
              iconName = 'search'; // telescope, but search
            } else if (route.name === 'Harbour') {
              iconName = 'anchor'; // harbour
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: colors.background },
        })}
      >
        <Tab.Screen name="Tide" component={HomeScreen} />
        <Tab.Screen name="Cast" component={CastScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Harbour" component={HarbourScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
