import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';

function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  
  function entrar() {

    if(input === '') { //verifica se o input está vazio
      alert('Digite seu nome!');
      return; // ele não continua os codigos abaixo
    }

    setNome('Bem vindo: ' + input);
  }

  return(
  <View style={styles.container}>

    <TextInput
      style={styles.input}
      placeholder= "Digite seu nome"
      onChangeText={ (text) => setInput(text) } // A cada vez que digitar alguma coisa nesse campo, ele chama uma função
    />

    <Button title='Entrar' onPress={ entrar }/>

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
    fontSize: 25,
    marginTop: 15
  }

});

export default App;