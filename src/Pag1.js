import React, { Component } from 'react';
import {StyleSheet, Image,Text, TextInput, TouchableOpacity,Alert, ImageBackground } from 'react-native';

export default class Login extends Component {
  clicou = () => {
    Alert.alert("DerivaGO", 'Fora daqui');
  }

  clicou1 = () => {
    Alert.alert("DerivaGO", 'Esqueceu já era');
  }

  clicou2 = () => {
    Alert.alert("DerivaGO", 'Cadastro negado');
  }

  render() {
    return (
      <ImageBackground source={require('./images/Royal.jpg')} style={styles.container}>
      <Image
        source={require('./images/logos.png')}
        style={styles.logo}
        />
        <TextInput
            style={styles.input}
            placeholder="Digite seu E-mail"
        />

        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua Senha"
        />

        <TouchableOpacity
            style={styles.botao}
            onPress={ () => {this.clicou()}}
            >
           <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>

       <TouchableOpacity onPress={this.clicou1}>
        <Text style={styles.esqueceu}> Esqueceu a senha</Text>
        </TouchableOpacity>

       <TouchableOpacity onPress={this.clicou2}>
       <Text style={styles.esqueceu}> Cadastrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e58',
    height: '100%',
    width: '100%'
  },
  logo:{
    width: 350,
    height: 250,
  },
  input:{
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao:{
    marginTop: 10,
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffff'
  },
  esqueceu:{
    marginTop:10,
    color: '#D8D8D8',
    textAlign: 'right',
    paddingRight: 15
  }
})