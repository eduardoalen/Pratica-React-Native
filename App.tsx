import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import Usuario from './src/Usuario/index';

function App() {

  return(
  <View style={styles.container}>
    <Text style={styles.titulo}>Seja bem vindo!</Text>
    <Usuario nome="Eduardo" cargo="Estagiario" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titulo: {
    padding: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    color: '#000000'
  }
});

export default App;