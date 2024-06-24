import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function App() {
  
  return(
  <View style={{flex:1, backgroundColor: '#121212'}}>

    <View style={styles.quadrado1}></View>
    <View style={styles.quadrado2}>
      <Text>Sou um texto</Text>
    </View>
    <View style={styles.quadrado3}></View>

  </View>
  );
}

const styles = StyleSheet.create({
  quadrado1: {
    height: 65,
    backgroundColor: '#121212'
  },
  quadrado2: {
    flex: 1,
    backgroundColor: '#DDD'
  },
  quadrado3: {
    height: 65,
    backgroundColor: '#121212'
  }
});

export default App;
