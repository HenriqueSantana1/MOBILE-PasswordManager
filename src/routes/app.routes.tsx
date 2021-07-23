import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Config } from '../screens/Config';
import { AddPassword } from '../screens/AddPassword';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen name="Home" component={ Home } />
      <Screen name="Config" component={ Config } />
      <Screen name="AddPassword" component={ AddPassword } />
    </Navigator>
  )
}