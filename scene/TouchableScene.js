/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const TouchableScene = () => (
  <View style={styles.flex}>
    <TouchableHighlight
      onPress={() => { }}
      underlayColor="#ffff00">
      <Text style={styles.text}>点击高亮显示效果</Text>
    </TouchableHighlight>

    <TouchableOpacity
      onPress={() => { }}
      activeOpacity={0.7}
    >
      <View style={styles.circle}>
        <Text style={styles.text} >圆形按钮</Text>
      </View>
    </TouchableOpacity>
  </View>
  
);
    

export default TouchableScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  touchO: {
  },

  circle: {
    marginLeft:30,
    marginTop:30,
    width:100,
    height:100,
    backgroundColor:'#18B4FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 1000,
  }
  
});
