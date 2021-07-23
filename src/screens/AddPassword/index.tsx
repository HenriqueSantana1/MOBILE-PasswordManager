import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export function AddPassword() {
  const { add } = useContext(Context)

  const [title, setTitle] = useState('')
  const [senha, setSenha] = useState('')
  const [login, setLogin] = useState('')
  
  async function handleAdd() {
    add(title, senha, login)
    navigator.navigate('Home')
  }


  const navigator = useNavigation()


  return (
    <View style={styles.container}>
          <View style={styles.containerInput}>
            <TextInput placeholder="Title" autoCorrect={false} autoCapitalize="none" onChangeText={text => setTitle(text)} style={styles.input}/>
            <TextInput placeholder="Password" autoCorrect={false} autoCapitalize="none" onChangeText={text => setSenha(text)} style={styles.input}/>
            <TextInput placeholder="Login" autoCapitalize="none" autoCorrect={false} onChangeText={text => setLogin(text)} style={styles.input}/>
            <TouchableOpacity onPress={handleAdd} style={styles.btnSubmit}>
              <Text style={styles.txtSubmit}>Salvar</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}