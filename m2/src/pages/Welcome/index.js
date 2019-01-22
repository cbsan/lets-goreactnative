import React, { Component } from 'react';
import api from '~/services/api';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsycStorage,
} from 'react-native';

import styles from './styles';

export default class Welcome extends Component {
  state = {
    username: '',
  };

  checUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async (username) => {
    await AsycStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    console.tron.log(username);
    try {
      // await this.checUserExists(username);
      // await this.saveUser(username);
    } catch (err) {
      console.tron.log('ERror', err);
    }
  };

  render() {
    const { username } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.text}>Para continuar informe seu usuário do GitHub</Text>

        <View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
