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
  AsyncStorage,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class AsyncStorageScene extends Component {
  static navigationOptions = {
    title: 'AsyncStorageScene',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      savedName: '',
      savedMobile: '',
    };
  }

  componentDidMount() {
    this.read();
  }

  render() {
    return (
      <View>
        <View style = {styles.row}>
          <View style = {styles.head}>
            <Text style = {styles.text}>name</Text>
          </View>
          <View style = {styles.flex}>
            <TextInput style = {styles.inputText}
              onChangeText = {(name) => this.setState({ name })}
              value = {this.state.name}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.head}>
            <Text style={styles.text}>mobile</Text>
          </View>
          <View style={styles.flex}>
            <TextInput style={styles.inputText}
              onChangeText={(mobile) => this.setState({ mobile })}
              value={this.state.mobile}
            />
          </View>
        </View>

        <View style={styles.row}>

          <TouchableOpacity
            style = { styles.btn }
            onPress = { () => { this.save(); } }>
            <Text style={styles.text} >保存</Text>
          </TouchableOpacity>

          <View width = {5} />

          <TouchableOpacity
            style = { styles.btn }
            onPress = { () => { this.clear(); } }>
            <Text style={styles.text} >清除</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>
          <Text style = { styles.inputText }>name saved: { this.state.savedName }</Text>
        </View>

        <View style={styles.row}>
          <Text style = { styles.inputText }>mobile saved: { this.state.savedMobile }</Text>
        </View>

      </View>
    );
  }

  //save data
  save() {
    var _that = this;
    var keyValuePairs = [['savedName', this.state.name], ['savedMobile', this.state.mobile]]
    AsyncStorage.multiSet(keyValuePairs, function(errs) {
      if(errs){
        //todo
      } else {
        _that.read();
      }
    });
  }

  read() {
    var _that = this;
    var keys = ['savedName', 'savedMobile'];
    AsyncStorage.multiGet(keys, (errors, result) => {
      if (errors) {
        //todo
        return;
      }

      _that.setState( {
        savedName: result[0][1] ? result[0][1] : '',
        savedMobile: result[1][1] ? result[1][1] : '',
      });
      
    });
  }
 
  //clear data
  clear() {
    var _that = this;
    AsyncStorage.clear(function(err) {
      if(!err){
        _that.setState({
          savedName: "",
          savedMobile: ""
        });
      }
    });
  }

}

const styles = StyleSheet.create({
  flex:{
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    height: 45,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center'
  },

  head:{
    width:70,
    backgroundColor:'#23BEFF',
    height:45,
    justifyContent:'center',
    alignItems: 'center'
  },

  input:{
    height:45,
    borderWidth:1,
    paddingLeft: 10,
    borderColor: '#ccc'
  },

  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  inputText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },

  btn: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#FF7200',
    height:45,
    textAlign:'center',
    lineHeight:45,
    fontSize:15,
  },
  
});
