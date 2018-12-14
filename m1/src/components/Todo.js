import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

export default class Todo extends Component {
  static defaultProps = {
    title: 'Default Title',
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title } = this.props;
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}
