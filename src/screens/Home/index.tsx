import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { Context } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const { list, add, decrypt, remove, update} = useContext(Context)
  const navigation = useNavigation()
  const [pw, setPw] = useState(null)

  useEffect(() => {
    handleList()
  }, [])

  async function handleList() {
    let pws = await list()
    for (let i = 0; i < pws.length; i++) {
      let res = await decrypt(pws[i].password, pws[i].iv)
      pws[i].password = res.data
    }
    console.log(pws)
    setPw(pws)
  }

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
        <TouchableOpacity style={styles.configIcon} onPress={handleConfig}>
          <Icon size={24} name="cog" color="#333" /> 
        </TouchableOpacity>
      </View>
      <FlatList style={{flex: 1, width: '100%'}}
        data={pw}
        keyExtractor={item => item._id}
        renderItem = {({item}) =>
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
          <View style={styles.passwordView}>
            {(item.login!==undefined) ? <Text style={styles.txtPW}>Login: {item.login}</Text> : null}
            <Text style={styles.txtPW}>Senha: {item.password}</Text>
          </View>
        </View>
        }
      />
      <TouchableOpacity onPress={handleAdd} style={styles.btnAdd}> 
        <Icon size={18} name="plus" color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
}