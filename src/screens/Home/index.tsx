import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const { generatePW, handleLogout, list, token, add, decrypt, me, remove, update} = useContext(Context)
  const navigation = useNavigation()
  function handleConfig() {
    navigation.navigate('Config')
  }

  async function handleAdd() {
    add('teste', 'teste', 'teste')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>My Passwords</Text>
        <TouchableOpacity onPress={handleConfig}>
          <Icon size={22} name="cog" color="#333" /> 
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleLogout}>
        <Text style={styles.txtBtn}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAdd} style={styles.btnAdd}> 
        <Icon size={18} name="plus" color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
}