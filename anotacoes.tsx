// TAMANHO DO view MÃE -------------------------
// import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';

// function App() {
  
//   return(
//   <View style={styles.fundo}>

//     <View style={styles.quadrado}></View>
    
//     <Text>Eduardoo</Text>
//     <Text>Eduardoo</Text>
//     <Text>Eduardoo</Text>

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   quadrado: {
//     width: 50,
//     height: 50,
//     backgroundColor: 'red'
//   },
//   fundo: {
//     backgroundColor: '#121212'
//   }
// })

// export default App;



// ELEMENTOS DIVIDINDO O ESPAÇO NA TELA --------------------------------------
// import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';

// function App() {
  
//   return(
//   <View style={{flex:1, backgroundColor: '#121212'}}>

//     <View style={styles.quadrado1}></View>
//     <View style={styles.quadrado2}></View>
//     <View style={styles.quadrado3}></View>

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   quadrado1: {
//     flex: 1,
//     backgroundColor: 'red'
//   },
//   quadrado2: {
//     flex: 2,
//     backgroundColor: 'green'
//   },
//   quadrado3: {
//     flex: 2,
//     backgroundColor: 'yellow'
//   }
// });

// export default App;




// INTEFACE DINAMICA E FIXA
// import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';

// function App() {
  
//   return(
//   <View style={{flex:1, backgroundColor: '#121212'}}>

//     <View style={styles.quadrado1}></View>
//     <View style={styles.quadrado2}>
//       <Text>Sou um texto</Text>
//     </View>
//     <View style={styles.quadrado3}></View>

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   quadrado1: {
//     height: 65,
//     backgroundColor: '#121212'
//   },
//   quadrado2: {
//     flex: 1,
//     backgroundColor: '#DDD'
//   },
//   quadrado3: {
//     height: 65,
//     backgroundColor: '#121212'
//   }
// });

// export default App;





// FLEXBOX E ALINHAMENTO --------------------------------------------------
// import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';

// function App() {
  
//   return(
//   <View style={{ 
//     flex:1, 
//     flexDirection: 'row', // linha
//     alignItems: 'flex-start', // eixo Y
//     justifyContent:'center' // eixo x 

//     // flexDirection: 'column', // coluna
//     // alignItems: 'flex-start', // eixo X
//     // justifyContent:'center' // eixo Y 
//     }}>

//     <View style={[styles.quadrado, styles.preto]}></View>
//     <View style={[styles.quadrado, styles.vermelho]}></View>
//     <View style={[styles.quadrado, styles.verde]}></View>
//     <View style={[styles.quadrado, styles.azul]}></View>

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   quadrado: {
//     height: 50,
//     width: 50
//   },
//   preto: {
//     backgroundColor: '#121212'
//   },
//   vermelho: {
//     backgroundColor: 'red'
//   },
//   verde: {
//     backgroundColor: 'green'
//   },
//   azul: {
//     backgroundColor: 'blue'
//   }
// });

// export default App;




// RECEBENDO DADOS
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet} from 'react-native';

// function App() {
//   const [nome, setNome] = useState('');

//   function pegaNome(texto) {

//     if(texto.length > 0) {
//       setNome('Bem vindo ' + texto);
//     } else {
//       setNome('');
//     } 
//   }
  
//   return(
//   <View style={styles.container}>

//     <TextInput
//       style={styles.input}
//       placeholder= "Digite seu nome"
//       onChangeText={ (text) => pegaNome(text)} // A cada vez que digitar alguma coisa nesse campo, ele chama uma função
//     />

//     <Text style={styles.texto}> {nome} </Text>

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   input: {
//     height: 45,
//     borderWidth: 1,
//     margin: 10,
//     padding: 10,
//     fontSize: 20
//   },
//   texto:{
//     textAlign: 'center',
//     fontSize: 25
//   }

// });

// export default App;