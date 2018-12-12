import React, { Component } from 'react';
import 'config/ReactotronConfig';

import {
  StyleSheet,
  View,
} from 'react-native';

export default class App extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    const todos = [
      'item 1',
      'item 2',
      'item 3',
      'item 4',
    ];

    this.setState({ todos });
  }

  addTodo = () => {
    const { todos } = this.state;

    this.setState({
      todos: [
        ...todos,
        `item ${todos.length + 1}`,
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [
      { rotateZ: '20deg' },
    ],
  },
});
