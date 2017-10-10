/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { 
  observable, 
  autorun,
  computed,
  action,
} from 'mobx';

export default class MobxScene extends Component {
  static navigationOptions = {
    title: 'MobxScene',
  };

  componentWillMount() {
    this.test1();
    this.test2();
    this.test3();
  }

  test1() {
    const value = observable(0);
    const number = observable(100);
    
    autorun(() => {
      //observable发生变化才会执行autorun
      console.log(value.get());
    });
    
    value.set(1);
    value.set(2);
    number.set(101);
  }

  test2() {
    const number = observable(10);
    const plus = computed(() => number.get() > 0);
    
    autorun(() => {
      //computed发生变化才会执行autorun
      console.log(plus.get());
    });
    
    number.set(-19);
    number.set(-1);
    number.set(1);
  }

  test3() {
   
  }

  render() {
    return (
      <View style = {styles.flex}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

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
