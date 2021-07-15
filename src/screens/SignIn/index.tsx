import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';



export function SignIn() {
  const { signin, token } = useContext(Context)
  const navigation = useNavigation()
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -360

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleSignIn() {
    await signin(email, senha)
  }

  async function handleSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#fff'}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={require('../../assets/logo.png')} style={styles.logo}/>
          <View style={styles.containerInput}>
            <TextInput placeholder="Email" autoCorrect={false} autoCompleteType='email' autoCapitalize="none" onChangeText={text => setEmail(text)} style={styles.input}/>
            <TextInput placeholder="Password" secureTextEntry autoCapitalize="none" autoCorrect={false} onChangeText={text => setSenha(text)} style={styles.input}/>
            <TouchableOpacity onPress={handleSignIn} style={styles.btnSubmit}>
              <Text style={styles.txtSubmit}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSignUp} style={styles.btnSignUp}>
            <Text style={{fontSize: 13, color: '#333'}}>Don't have an account? </Text>
            <Text style={styles.txtSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}