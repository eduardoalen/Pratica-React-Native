import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function App() {
  const [nome, setNome] = useState('Eduardo');

  function entrar(){
    setNome('Desodorante');
  }

  return(
    <View style={{ marginTop: 25 }}>

      <Button title="Mudar nome" onPress={entrar} />
      <Text style={{ fontSize: 19 }}> {nome} </Text>

  </View>
  );
}

export default App;
