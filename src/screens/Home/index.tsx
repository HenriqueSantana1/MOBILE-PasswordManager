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
  const { generatePW, handleLogout} = useContext(Context)
  
  return (
    <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Ir para Sign In" onPress={handleLogout}/>
        <Button title="Gerar senha" onPress={generatePW}/>
        <TouchableOpacity onPress={generatePW} style={styles.btnAdd}> 
          <Icon size={18} name="plus" color="#fff" /> 
        </TouchableOpacity>
    </View>
  );
}