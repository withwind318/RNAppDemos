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
  ScrollView,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import SplashScene from './SplashScene';
import AsyncStorageScene from './AsyncStorageScene';
import TouchableScene from './TouchableScene';
import MobxScene from './MobxScene';
import TabScene from './TabNaviScene';
import ListScene from './ListScene';
import DialogScene from './DialogScene';
import ModalScene from './ModalScene';
import AnimNavigator from './AnimationScene';

const Routes = {
  
  AsyncStorage: {
    name: 'AsyncStorageDemo',
    description: 'AsyncStorageDemo',
    screen: AsyncStorageScene 
  },
  Touchable: { 
    name: 'TouchableDemo',
    description: 'TouchableDemo',
    screen: TouchableScene 
  },
  Mobx: { 
    name: 'MobxDemo',
    description: 'MobxDemo',
    screen: MobxScene 
  },
  Tab: { 
    name: 'TabNavigatorDemo',
    description: 'TabNavigatorDemo',
    screen: TabScene 
  },
  List: { 
    name: 'ListViewDemo',
    description: 'ListViewDemo',
    screen: ListScene 
  },
  Dialog: { 
    name: 'DialogDemo',
    description: 'DialogDemo',
    screen: DialogScene 
  },
  Animation: { 
    name: 'AnimationDemo',
    description: 'AnimationDemo',
    screen: AnimNavigator 
  },

};

class HomeScene extends Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>

        {Object.keys(Routes).map( (routeName) => (
          <TouchableOpacity
            key = {routeName}
            onPress={() => {
              const { path, params, screen } = Routes[routeName];
              const { router } = screen;
              const action = path && router.getActionForPathAndParams(path, params);
              navigate(routeName, {}, action);
            }}
            >
            <View style={styles.item}>
              <Text style={styles.title}>{Routes[routeName].name}</Text>
              <Text style={styles.description}>
                {Routes[routeName].description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    );
  }
}


const RNAppDemos = StackNavigator(
  {
    ...Routes,
    Home: { 
      screen: HomeScene,
    },
    Splash: {
      screen: SplashScene,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  }
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});

AppRegistry.registerComponent('RNAppDemos', () => RNAppDemos);