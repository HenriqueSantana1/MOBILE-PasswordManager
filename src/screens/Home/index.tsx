import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';

export function Home() {
  const { generatePW, handleLogout, list, token, add, decrypt, me, remove, update} = useContext(Context)
  console.log(token)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>My Passwords</Text>
        <Icon size={18} name="search" color="#333" /> 
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleLogout}>
        <Text style={styles.txtBtn}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={generatePW}>
        <Text style={styles.txtBtn}>Gerar senha aleatória</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={list}>
        <Text style={styles.txtBtn}>Listar senhas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={decrypt}>
        <Text style={styles.txtBtn}>Decrypt password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={me}>
        <Text style={styles.txtBtn}>ME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={remove}>
        <Text style={styles.txtBtn}>Remover senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={update}>
        <Text style={styles.txtBtn}>Update senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={add} style={styles.btnAdd}> 
        <Icon size={18} name="plus" color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
}