import React, { useContext } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';

export function Home() {
  const { isAuthenticated, logout} = useContext(Context)
  const navigation = useNavigation()

  async function handleLogout() {
    await logout()
    navigation.navigate('SignIn')
  }

  console.log(isAuthenticated)
  return (
    <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Deslogar" onPress={handleLogout}/>
    </View>
  );
}