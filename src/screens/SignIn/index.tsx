import React, { useContext } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';

export function SignIn() {
  const { isAuthenticated, login } = useContext(Context)
  const navigation = useNavigation()

  async function handleLogin() {
    await login()
    navigation.navigate('Home')
  }


  return (
    <View style={styles.container}>
        <Text>SignIn</Text>
        <Button title="Logar" onPress={handleLogin}/>
    </View>
  );
}