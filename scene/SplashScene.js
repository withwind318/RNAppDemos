/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScene from './HomeScene';
import AsyncStorageScene from './AsyncStorageScene';
import TouchableScene from './TouchableScene';
import MobxScene from './MobxScene';

class SplashScene extends Component {
  static navigationOptions = {
    title: 'SplashScene',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
          <View style={styles.splash}>
            <Image
              source={require('../image/splash/splash.png')}></Image>
          </View>
        </View>
    );
  }
}

export const RNAppDemos = StackNavigator({
  Splash: { screen: SplashScene },
  //Home: { screen: HomeScene },
  AsyncStorage: { screen: AsyncStorageScene },
  Touchable: { screen: TouchableScene },
  Mobx: { screen: MobxScene },
});

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  splash: {
    marginTop: 0,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  flex: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 10,
  },

  text: {
    fontSize: 18,
    marginLeft: 10,
    color: '#434343'
  },
  
});

AppRegistry.registerComponent('RNAppDemos', () => RNAppDemos);
