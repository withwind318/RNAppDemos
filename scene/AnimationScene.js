import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import AnimSpinScene from './AnimSpinScene';
import AnimatedTimingScene from './AnimatedTimingScene';
import AnimatedSpringScene from './AnimatedSpringScene';
import AnimatedParallelScene from './AnimatedParallelScene';
import AnimatedSeqScene from './AnimatedSeqScene';
import AnimatedStaggerScene from './AnimatedStaggerScene';

const AnimRoutes = {

  Spin: {
    name: 'Spin Animation Demo',
    description: 'Spin Animation Demo',
    screen: AnimSpinScene
  },
  Timing: {
    name: 'Animated.timing Demo',
    description: 'Animated.timing Demo',
    screen: AnimatedTimingScene
  },
  Spring: {
    name: 'Animated.spring Demo',
    description: 'Animated.spring Demo',
    screen: AnimatedSpringScene
  },
  Parallel: {
    name: 'Animated.parallel Demo',
    description: 'Animated.parallel Demo',
    screen: AnimatedParallelScene
  },
  Seq: {
    name: 'Animated.sequence Demo',
    description: 'Animated.sequence Demo',
    screen: AnimatedSeqScene
  },
  Stagger: {
    name: 'Animated.stagger Demo',
    description: 'Animated.stagger Demo',
    screen: AnimatedStaggerScene
  },
};

class AnimationScene extends Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>

        {Object.keys(AnimRoutes).map((routeName) => (
          <TouchableOpacity
            key = {routeName}
            onPress={() => {
              const { path, params, screen } = AnimRoutes[routeName];
              const { router } = screen;
              const action = path && router.getActionForPathAndParams(path, params);
              navigate(routeName, {}, action);
            }}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{AnimRoutes[routeName].name}</Text>
              <Text style={styles.description}>
                {AnimRoutes[routeName].description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    );
  }
}


const AnimNavigator = StackNavigator(
  {
    ...AnimRoutes,
    Anim: {
      screen: AnimationScene,
    },
  },
  {
    initialRouteName: 'Anim',
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

export default AnimNavigator;