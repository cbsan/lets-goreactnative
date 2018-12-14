import React, { Component } from 'react';
import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [],
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
        {Platform.OS === 'ios'
          ? <Text>IOS</Text>
          : <Text>Android</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
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
