import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Animated,
  Easing,
  TouchableHighlight,
} from 'react-native';

export default class AnimatedParallelScene extends Component {

  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);

    const createAnimation = (value, duration, easing, delay = 0) => Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        easing,
        delay
      }
    );

    Animated.parallel([
      createAnimation(this.animatedValue1, 1500, Easing.ease, 0),
      createAnimation(this.animatedValue2, 2000, Easing.ease, 1500),
      createAnimation(this.animatedValue3, 2000, Easing.ease, 3500)
    ]).start(() => this.animate());
  }

  render() {

    const scaleText = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 2]
    })
    const spinText = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    })
    const introButton = this.animatedValue3.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-100, 400, 400]
    })

    return (
      <View style={styles.container}>
        <Animated.View
          style={{ transform: [{ scale: scaleText }] }}>
          <Text>Welcome</Text>
        </Animated.View>
        <Animated.View
          style={{ marginTop: 20, transform: [{ rotate: spinText }] }}>
          <Text
            style={{ fontSize: 20 }}>
            to the App!
          </Text>
        </Animated.View>
        <Animated.View
          style={{ top: introButton, position: 'absolute', backgroundColor: 'blue' }}>
          <TouchableHighlight
            onPress={this.animate.bind(this)}
            style={styles.button}>
            <Text
              style={{ color: 'white', fontSize: 20 }}>
              Click Here To Start
          </Text>
          </TouchableHighlight>
        </Animated.View>
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