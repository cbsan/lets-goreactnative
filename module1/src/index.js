import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Todo from './components/Todo';



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

    this.setState({todos})
  }

  addTodo = () => {
    const { todos } = this.state;

    this.setState({ todos: [
      ...todos,
      `item ${todos.length+1}`
    ] });
  }

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
      { todos.map(todo =>  <Todo key={Math.random()} title={todo}/> )}
      <Button title="Add" onPress={this.addTodo}/>
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
