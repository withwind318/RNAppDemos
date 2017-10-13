import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  Easing,
} from 'react-native';

export default class AnimatedSpringScene extends Component {

  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);
  }

  componentDidMount() {
    this.spring();
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
      }
    ).start(() => this.spring());
  }

  render() {

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 225,
            height: 200,
            transform: [{ scale: this.springValue }]
          }}
          source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
        />
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});