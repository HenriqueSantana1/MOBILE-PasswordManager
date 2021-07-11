import React, { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
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

  async function handleSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        <View style={styles.containerInput}>
          <TextInput placeholder="Email" autoCorrect={false} onChangeText={() => {}} style={styles.input}/>
          <TextInput placeholder="Password" secureTextEntry autoCorrect={false} onChangeText={() => {}} style={styles.input}/>
          <TouchableOpacity onPress={handleLogin} style={styles.btnSubmit}>
            <Text style={styles.txtSubmit}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp} style={styles.btnSignUp}>
            <Text style={styles.txtSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}