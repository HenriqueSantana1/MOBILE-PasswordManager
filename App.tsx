import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_300Light, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  return(
    <AuthProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
    </AuthProvider>
  );
}