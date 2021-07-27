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
    const addPw = await add(title, senha, login)
    console.log(addPw)
    navigator.navigate('Home')
  }


  const navigator = useNavigation()


  return (
    <View style={styles.container}>
          <View style={styles.containerInput}>
            <TextInput placeholder="Title"  onChangeText={text => setTitle(text)} style={styles.input}/>
            <TextInput placeholder="Password" autoCorrect={false} autoCapitalize="none" onChangeText={text => setSenha(text)} style={styles.input}/>
            <TextInput placeholder="Login" onChangeText={text => setLogin(text)} style={styles.input}/>
            <TouchableOpacity onPress={handleAdd} style={styles.btnSubmit}>
              <Text style={styles.txtSubmit}>Salvar</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}