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
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import AsyncStorageScene from './scene/AsyncStorageScene';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
        onPress={() => navigate('AsyncStorage') }
        title="AsyncStorageDemo"
        color="#841584"
      />
      </View>
    );
  }
}

export default RNAppDemos = StackNavigator({
  Home: { screen: HomeScreen },
  AsyncStorage: { screen: AsyncStorageScene },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('RNAppDemos', () => RNAppDemos);
