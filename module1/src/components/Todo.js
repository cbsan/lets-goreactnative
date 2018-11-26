import React,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Todo extends Component {
  render() {
    const { title } = this.props;
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}
