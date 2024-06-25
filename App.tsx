import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

function App() {
  const [nome, setNome] = useState('');

  function pegaNome(texto) {

    if(texto.length > 0) {
      setNome('Bem vindo ' + texto);
    } else {
      setNome('');
    } 
  }
  
  return(
  <View style={styles.container}>

    <TextInput
      style={styles.input}
      placeholder= "Digite seu nome"
      onChangeText={ (text) => pegaNome(text)} // A cada vez que digitar alguma coisa nesse campo, ele chama uma função
    />

    <Text style={styles.texto}> {nome} </Text>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }

});

export default App;