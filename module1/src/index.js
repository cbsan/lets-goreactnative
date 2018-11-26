import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo title="todo 1"/>
        <Todo title="todo 2"/>
        <Todo title="todo 3"/>
        <Todo title="todo 4"/>
        <Todo title="todo 5"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
