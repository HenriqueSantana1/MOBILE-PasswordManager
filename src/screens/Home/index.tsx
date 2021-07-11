import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';

export function Home() {
  const { generatePW} = useContext(Context)
  const navigation = useNavigation()

  async function handleSignIn() {
    navigation.navigate('SignIn')
  }
  
  async function handleGeneratePW() {
    await generatePW()
  }
  
  return (
    <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Ir para Sign In" onPress={handleSignIn}/>
        <Button title="Gerar senha" onPress={handleGeneratePW}/>
        <TouchableOpacity onPress={handleGeneratePW} style={styles.btnAdd}> 
          <Icon name="plus" color="#fff" /> 
        </TouchableOpacity>
    </View>
  );
}