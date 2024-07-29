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




// TRABALHANDO COM BOTÕES
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button} from 'react-native';

// function App() {
//   const [nome, setNome] = useState('');
//   const [input, setInput] = useState('');
  
//   function entrar() {

//     if(input === '') { //verifica se o input está vazio
//       alert('Digite seu nome!');
//       return; // ele não continua os codigos abaixo
//     }

//     setNome('Bem vindo: ' + input);
//   }

//   return(
//   <View style={styles.container}>

//     <TextInput
//       style={styles.input}
//       placeholder= "Digite seu nome"
//       onChangeText={ (text) => setInput(text) } // A cada vez que digitar alguma coisa nesse campo, ele chama uma função
//     />

//     <Button title='Entrar' onPress={ entrar }/>

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
//     fontSize: 25,
//     marginTop: 15
//   }

// });

// export default App;




// import React from 'react';
// import { View, StyleSheet, ScrollView} from 'react-native';

// function App() {

//   return(
//   <View style={styles.container}>

//     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//       {/* Todas a Views que eu quero que seja scrollavel*/}
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//       <View style={styles.box4}></View>
//       <View style={styles.box2}></View>
//     </ScrollView>

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   box1: {
//     width: 150,
//     height: 250,
//     backgroundColor: 'red'
//   },
//   box2: {
//     width: 150,
//     height: 250,
//     backgroundColor: 'green'
//   },
//   box3: {
//     width: 150,
//     height: 250,
//     backgroundColor: 'yellow'
//   },
//   box4: {
//     width: 150,
//     height: 250,
//     backgroundColor: 'blue'
//   }
// });

// export default App;




// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList} from 'react-native';

// function App() {

//   const [feed, setFeed] = useState([
//     {id: '1', nome: 'Julio', idade: 50, email: 'julio@julio.com'},
//     {id: '2', nome: 'Lucas', idade: 20, email: 'lucas@lucas.com'},
//     {id: '3', nome: 'Henrique', idade: 40, email: 'henrique@henrique.com'},
//     {id: '4', nome: 'Ana', idade: 19, email: 'ana@ana.com'},
//     {id: '5', nome: 'Beatriz', idade: 28, email: 'bea@bea.com'}
//   ]);

//   return(
//   <View style={styles.container}>

//     <FlatList
//     showsVerticalScrollIndicator={false}
//     // passa a lista
//     data={feed}
//     // passar e renderizar a lista
//     renderItem={ ({ item }) => <Pessoa data={item} />} 
//     />

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   areaPessoa: {
//     backgroundColor: '#121212',
//     height: 200,
//     marginBottom: 15,
//     justifyContent: 'center'
//   },
//   textoPessoa: {
//     color: '#FFF',
//     fontSize: 20
//   }
// });

// function Pessoa(props) {
//   return(
//     <View style={styles.areaPessoa}>
//       <Text style={styles.textoPessoa} >{props.data.nome}</Text>
//       <Text style={styles.textoPessoa} >{props.data.idade}</Text>
//       <Text style={styles.textoPessoa} >{props.data.email}</Text>
//     </View>
//   );
// }

// export default App;






// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList} from 'react-native';

// function App() {

//   const [feed, setFeed] = useState([
//     {_id: '1', nome: 'Julio', idade: 50, email: 'julio@julio.com'},
//     {_id: '2', nome: 'Lucas', idade: 20, email: 'lucas@lucas.com'},
//     {_id: '3', nome: 'Henrique', idade: 40, email: 'henrique@henrique.com'},
//     {_id: '4', nome: 'Ana', idade: 19, email: 'ana@ana.com'},
//     {_id: '5', nome: 'Beatriz', idade: 28, email: 'bea@bea.com'}
//   ]);

//   return(
//   <View style={styles.container}>

//     <FlatList
//     showsVerticalScrollIndicator={false}
//     // avisa que o _id é o id
//     keyExtractor={ (item) => item._id }
//     // passa a lista
//     data={feed}
//     // passar e renderizar a lista
//     renderItem={ ({ item }) => <Pessoa data={item} />} 
//     />

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   areaPessoa: {
//     backgroundColor: '#121212',
//     height: 200,
//     marginBottom: 15,
//     justifyContent: 'center'
//   },
//   textoPessoa: {
//     color: '#FFF',
//     fontSize: 20
//   }
// });

// function Pessoa(props) {
//   return(
//     <View style={styles.areaPessoa}>
//       <Text style={styles.textoPessoa} >{props.data.nome}</Text>
//       <Text style={styles.textoPessoa} >{props.data.idade}</Text>
//       <Text style={styles.textoPessoa} >{props.data.email}</Text>
//     </View>
//   );
// }

// export default App;






// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList} from 'react-native';

// import Pessoa from './src/Pessoa/index';

// function App() {

//   const [feed, setFeed] = useState([
//     {id: '1', nome: 'Julio', idade: 50, email: 'julio@julio.com'},
//     {id: '2', nome: 'Lucas', idade: 20, email: 'lucas@lucas.com'},
//     {id: '3', nome: 'Henrique', idade: 40, email: 'henrique@henrique.com'},
//     {id: '4', nome: 'Ana', idade: 19, email: 'ana@ana.com'},
//     {id: '5', nome: 'Beatriz', idade: 28, email: 'bea@bea.com'}
//   ]);

//   return(
//   <View style={styles.container}>

//     <FlatList
//     showsVerticalScrollIndicator={false}
//     // passa a lista
//     data={feed}
//     // passar e renderizar a lista
//     renderItem={ ({ item }) => <Pessoa data={item} />} 
//     />

//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

// export default App;





// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList} from 'react-native';

// import Usuario from './src/Usuario/index';

// function App() {

//   return(
//   <View style={styles.container}>
//     <Text style={styles.titulo}>Seja bem vindo!</Text>
//     <Usuario nome="Eduardo" cargo="Estagiario" />
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   titulo: {
//     padding: 10,
//     backgroundColor: '#ffffff',
//     textAlign: 'center',
//     fontWeight: '600',
//     color: '#000000'
//   }
// });

// export default App;