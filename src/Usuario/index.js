import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Usuario (props) {
    return(
        <View style={styles.container}>
            <Text style={styles.usuario}>Nome: {props.nome}</Text>
            <Text style={styles.usuario}>Cargo: {props.cargo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#05097c',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingLeft: 10
    },
    usuario: {
        color: '#FFFFFF',
        fontSize: 20
      }
});

export default Usuario;