import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function App() {
  
  return(
  <View style={{ 
    flex:1, 
    flexDirection: 'row', // linha
    alignItems: 'flex-start', // eixo Y
    justifyContent:'center' // eixo x 

    // flexDirection: 'column', // coluna
    // alignItems: 'flex-start', // eixo X
    // justifyContent:'center' // eixo Y 
    }}>

    <View style={[styles.quadrado, styles.preto]}></View>
    <View style={[styles.quadrado, styles.vermelho]}></View>
    <View style={[styles.quadrado, styles.verde]}></View>
    <View style={[styles.quadrado, styles.azul]}></View>

  </View>
  );
}

const styles = StyleSheet.create({
  quadrado: {
    height: 50,
    width: 50
  },
  preto: {
    backgroundColor: '#121212'
  },
  vermelho: {
    backgroundColor: 'red'
  },
  verde: {
    backgroundColor: 'green'
  },
  azul: {
    backgroundColor: 'blue'
  }
});

export default App;