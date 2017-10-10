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
  TouchableOpacity,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import AsyncStorageScene from './AsyncStorageScene';
import TouchableScene from './TouchableScene';
import MobxScene from './MobxScene';
import TabScene from './TabNaviScene';
import ListScene from './ListScene';

class HomeScene extends Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <TouchableOpacity
          onPress={() => navigate('AsyncStorage')}
          activeOpacity={0.7}
          >
          <View style={styles.btn}>
            <Text style={styles.text} >AsyncStorageDemo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Touchable')}
          activeOpacity={0.7}
          >
          <View style={styles.btn}>
            <Text style={styles.text} >TouchableDemo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Mobx')}
          activeOpacity={0.7}
          >
          <View style={styles.btn}>
            <Text style={styles.text} >MobxDemo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Tab')}
          activeOpacity={0.7}
          >
          <View style={styles.btn}>
            <Text style={styles.text} >TabDemo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('List')}
          activeOpacity={0.7}
          >
          <View style={styles.btn}>
            <Text style={styles.text} >ListDemo</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

export const RNAppDemos = StackNavigator({
  Home: { screen: HomeScene },
  AsyncStorage: { screen: AsyncStorageScene },
  Touchable: { screen: TouchableScene },
  Mobx: { screen: MobxScene },
  Tab: { screen: TabScene },
  List: { screen: ListScene },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },

  row: {
    flexDirection: 'row',
    flex: 1,
  },

  text: {
    fontSize: 16,
    marginLeft: 10,
    color: '#434343'
  },

  btn: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: 45,
    backgroundColor: '#18B4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('RNAppDemos', () => RNAppDemos);