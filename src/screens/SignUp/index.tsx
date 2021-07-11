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

export function SignUp() {
  const { isAuthenticated, signup } = useContext(Context)
  const navigation = useNavigation()

  async function handleSignUp() {
    await signup()
    navigation.navigate('SignIn')
  }

  async function handleSignIn() {
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        <View style={styles.containerInput}>
          <TextInput placeholder="Nome" autoCorrect={false} onChangeText={() => {}} style={styles.input}/>
          <TextInput placeholder="Email" autoCorrect={false} onChangeText={() => {}} style={styles.input}/>
          <TextInput placeholder="Password" autoCorrect={false} onChangeText={() => {}} style={styles.input}/>
          <TouchableOpacity onPress={handleSignUp} style={styles.btnSubmit}>
            <Text style={styles.txtSubmit}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignIn} style={styles.btnSignin}>
          <Text style={{fontSize: 13}}>Already have an account? </Text>
          <Text style={styles.txtSignin}>Sign In</Text>
        </TouchableOpacity>
    </View>
  );
}