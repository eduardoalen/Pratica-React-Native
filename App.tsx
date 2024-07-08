import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

function App() {

  const [feed, setFeed] = useState([
    {id: '1', nome: 'Julio', idade: 50, email: 'julio@julio.com'},
    {id: '2', nome: 'Lucas', idade: 20, email: 'lucas@lucas.com'},
    {id: '3', nome: 'Henrique', idade: 40, email: 'henrique@henrique.com'},
    {id: '4', nome: 'Ana', idade: 19, email: 'ana@ana.com'},
    {id: '5', nome: 'Beatriz', idade: 28, email: 'bea@bea.com'}
  ]);

  return(
  <View style={styles.container}>

    <FlatList
    showsVerticalScrollIndicator={false}
    // passa a lista
    data={feed}
    // passar e renderizar a lista
    renderItem={ ({ item }) => <Pessoa data={item} />} 
    />

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  areaPessoa: {
    backgroundColor: '#121212',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center'
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  }
});

function Pessoa(props) {
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa} >{props.data.nome}</Text>
      <Text style={styles.textoPessoa} >{props.data.idade}</Text>
      <Text style={styles.textoPessoa} >{props.data.email}</Text>
    </View>
  );
}

export default App;