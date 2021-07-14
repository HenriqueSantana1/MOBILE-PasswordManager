import React, { useState, useContext } from 'react';
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
  const { signin, token } = useContext(Context)
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleSignIn() {
    await signin(email, senha)
  }

  async function handleSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        <View style={styles.containerInput}>
          <TextInput placeholder="Email" autoCorrect={false} onChangeText={text => setEmail(text)} style={styles.input}/>
          <TextInput placeholder="Password" secureTextEntry autoCorrect={false} onChangeText={text => setSenha(text)} style={styles.input}/>
          <TouchableOpacity onPress={handleSignIn} style={styles.btnSubmit}>
            <Text style={styles.txtSubmit}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignUp} style={styles.btnSignUp}>
          <Text style={{fontSize: 13, color: '#333'}}>Don't have an account? </Text>
          <Text style={styles.txtSignUp}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
}