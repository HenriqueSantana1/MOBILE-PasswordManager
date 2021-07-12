import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { Context } from '../contexts/AuthContext';

export function Routes() {
  const { isAuthenticated } = useContext(Context)
  return (
    isAuthenticated ? (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    ) :
    (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    )
  );
}