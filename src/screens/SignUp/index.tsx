import React, { useState, useContext } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Platform
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';

export function SignUp() {
  const { signup } = useContext(Context)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigation = useNavigation()
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -360
  
  async function handleSignUp() {
    const data = await signup(name, email, senha)
    if (data) {
      navigation.navigate('SignIn')
    }
  }

  async function handleSignIn() {
    navigation.navigate('SignIn')
  }

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#fff'}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        <View style={styles.containerInput}>
          <TextInput placeholder="Nome" autoCorrect={false} onChangeText={text => setName(text)} style={styles.input}/>
          <TextInput placeholder="Email" autoCorrect={false} onChangeText={text => setEmail(text)} style={styles.input}/>
          <TextInput placeholder="Password" secureTextEntry autoCorrect={false} onChangeText={text => setSenha(text)} style={styles.input}/>
          <TouchableOpacity onPress={handleSignUp} style={styles.btnSubmit}>
            <Text style={styles.txtSubmit}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignIn} style={styles.btnSignin}>
          <Text style={{fontSize: 13, color: '#333'}}>Already have an account? </Text>
          <Text style={styles.txtSignin}>Sign In</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}