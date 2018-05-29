/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class HomeLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Text>Here goes logo</Text>
        </View>
        <View style={styles.inputcontainerUser}>
          <Text style={styles.labelUser}>Usuario</Text>
          <TextInput style={styles.input} placeholder="Hola"/>
          </View>
         <View style={styles.inputcontainerPassword}>
          <Text style={styles.labelPassword}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="Hola"/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  logocontainer: {
    marginTop: '30%',
    marginLeft: '33%'
  },
  inputcontainerUser: {
    marginTop: '35%',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%'
  },
  inputcontainerPassword: {
    marginTop: '5%',
    flexDirection: 'row',
    marginLeft: '10%',
    marginRight: '10%'
  },
  labelUser: {
    marginTop: '1%',
    width: '100%',
    backgroundColor: '#76FAB1',
    paddingLeft: '4%',
    paddingTop: '3%',
    paddingBottom: '2%',
    paddingRight: '15%',
    borderRadius: 2
  },
  labelPassword: {
    marginTop: '1%',
    width: '100%',
    backgroundColor: '#76FAB1',
    paddingLeft: '2%',
    paddingTop: '3%',
    paddingBottom: '2%',
    paddingRight: '7%',
    borderRadius: 2
  },
  input: {
    paddingLeft: '4%',
    backgroundColor: '#fff',
    borderRadius: '10% 60%',
    marginLeft: '-10%',
    height: 32
    
  }
  
});

AppRegistry.registerComponent('HomeLogin', () => HomeLogin);