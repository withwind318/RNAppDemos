
import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  View,
} from 'react-native';

export default class AnimatedStaggerScene extends Component {

  constructor(props) {
    super(props);
    this.animatedValue = [];
    for (let i = 0; i < 500; i++) {
      this.animatedValue.push(new Animated.Value(0));
    }
  }

  componentDidMount() {
    this.animate(); 
  }

  animate() {
    const animations = this.animatedValue.map((item) => {
      return Animated.timing(
        item,
        {
          toValue: 1,
          duration: 50
        }
      );
    });
    Animated.stagger(50, animations).start();
  }

  render() {

    const animViews = this.animatedValue.map((item, index) => {
      return ( <Animated.View key={index} style={{opacity: item, height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} /> );
    });

    return (
      <View style={styles.container}>
        {animViews}
      </View>
    );
  }

}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});