import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function App() {
  const [nome, setNome] = useState('Eduardo');
  const [idade, setIdade] = useState(22);

  function entrar(nome, idade){
    setNome(nome);
    setIdade(idade)
  }

  return(
    <View style={{ marginTop: 25 }}>

      <Button title="Mudar nome" onPress={ () => entrar('Junior Alex', 33)} />
      <Text style={{ fontSize: 19 }}> {nome} </Text>
      <Text style={{ fontSize: 19 }}> {idade} </Text>

  </View>
  );
}

export default App;
