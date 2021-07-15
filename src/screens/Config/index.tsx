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

export function Config() {
  const { generatePW, handleLogout, token } = useContext(Context)
  const navigator = useNavigation()
  console.log(token)
  
  function handleBack() {
    navigator.navigate('Home')
  }

  async function handleGeneratePW() {
    await generatePW(15, 1, 1, 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={handleBack}>
            <Icon size={24} name="angle-left" color="#333" /> 
        </TouchableOpacity>
        <Text style={styles.txtHeader}>Configurações</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleGeneratePW}>
        <Text style={styles.txtBtn}>Gerar senha aleatória</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogout} onPress={handleLogout}>
        <Text style={styles.txtBtn}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}