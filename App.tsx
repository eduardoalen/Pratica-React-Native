import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import Usuario from './src/Usuario/index';

function App() {

  return(
  <View style={styles.container}>
    <Text>Opaa</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;