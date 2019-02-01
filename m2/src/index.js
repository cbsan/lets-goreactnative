import React, { Component } from 'react';

import { AsyncStorage, StatusBar } from 'react-native';
import '~/config/reactotron.config';
import '~/config/dev-tools.config';

import { colors } from '~/styles';
import createNavigator from './routes';

StatusBar.setBackgroundColor(colors.secondary);
export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');

    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;
    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
