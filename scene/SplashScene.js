/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

import { StackNavigator, NavigationActions } from 'react-navigation';


const {width, height} = Dimensions.get('window');

export default class SplashScene extends Component {
  static navigationOptions = {
    title: 'SplashScene',
  };

  render() {
    const { navigate, dispatch } = this.props.navigation;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    });

    setTimeout(() => {
      dispatch(resetAction);
    }, 500);
    

    return (
      <View style={styles.container}>
        <Image style={styles.splash}
          source={require('../image/splash/splash.png')}>
        </Image>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  splash: {
    width: width,
    height: height,
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
